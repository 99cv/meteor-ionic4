const path = require('path');
const fs = require('fs');
const getFilesList = require('./getFilesList');

const LIB_NAME = '@ionic/core';
const LIB_VERSION = '4.0.0-alpha.2';
const PACKAGE_WRAP_VERSION = '2'; // Meteor package wrap number https://docs.meteor.com/api/packagejs.html#PackageNamespace-describe
const ASSETS_FOLDER = '/dist/ionic/'; // Expose only files that belong to this folder.
const EXTRA_FILES = [
  '/dist/ionic.js',
];

const targetPath = path.join(__dirname, '..', 'package.js');
const prefix = path.join('.', '.npm', 'package', 'node_modules', ...strToParts(LIB_NAME));


showDistFilesPaths();


async function showDistFilesPaths() {
  const filesPaths = await getLibFilesList(ASSETS_FOLDER);

  EXTRA_FILES.forEach((extraFilePath) => {
    filesPaths.push(toSysPath(extraFilePath));
  });

  writePackage(filesPaths);
}

async function getLibFilesList(filterFolder) {
  let filesList = await getFilesList(LIB_NAME, LIB_VERSION);

  if (filterFolder) {
    filesList = filesList.filter(file => file.name.indexOf(filterFolder) >= 0);
  }

  return filesList.map(file => toSysPath(file.name));
}

function toSysPath(urlPath) {
  // Make sure we start from current directory, otherwise Meteor crashes.
  return '.' + path.sep + path.join(prefix, ...strToParts(urlPath));
}

function strToParts(urlPath) {
  return urlPath.split('/').filter(part => part.trim());
}

async function writePackage(filesList) {
  return new Promise((resolve, reject) => {
    const packageContent =
`Package.describe({
  name: 'runisland:ionic4',
  version: '${LIB_VERSION}_${PACKAGE_WRAP_VERSION}',
  summary: 'Automatically import Ionic4 Web Components into your client templates',
  git: 'https://github.com/runisland/meteor-ionic4.git',
  documentation: 'README.md'
});

Npm.depends({
  '${LIB_NAME}': '${LIB_VERSION}',
});

Package.onUse((api) => {
  api.versionsFrom('1.3');
  
  api.use(['static-html']);
  api.addFiles('scriptIonic.html', 'client');
  
  api.addAssets([
    // NOTE: this list is automatically generated by the "npm run build" script.
    ${filesList.map(cleanPath).join(',\n    ')}
  ], 'client');
});

// No test, only side effect of adding Ionic4 assets and loading ionic.js script.
`;

    fs.writeFile(targetPath, packageContent, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}


// List all Ionic asset files that need to be added as assets to the Meteor app.
/*const targetPath = path.join(__dirname, 'package.js');
const ionicDist = path.join(__dirname, '.npm', 'package', 'node_modules', '@ionic', 'core', 'dist');
const ionicDistIonic = path.join(ionicDist, 'ionic');

const files = []; //getFilesRecursive(ionicDistIonic);

// Also include the Ionic loader file.
const fileIonicLoader = cleanPath(path.join(ionicDist, 'ionic.js'));
files.push(fileIonicLoader);

fs.writeFileSync(targetPath,
`Package.describe({
  name: 'runisland:ionic4',
  version: '${LIB_VERSION}_${PACKAGE_WRAP_VERSION}',
  summary: 'Automatically import Ionic4 Web Components into your client templates',
  git: 'https://github.com/runisland/ionic4.git',
  documentation: 'README.md'
});

Package.onUse((api) => {
  Npm.depends({
    '${LIB_NAME}': '${LIB_VERSION}',
  });
  
  api.use(['static-html']);
  api.addFiles('scriptIonic.html', 'client');
  
  api.addAssets([
    ${files.map(cleanPath).join(',\n    ')}
  ], 'client');
});

// No test, only side effect of adding Ionic4 assets and loading ionic.js script.
`);

function cleanPath(source) {
  return `'.${source.replace(__dirname, '')}'`;
}
*/


function cleanPath(source) {
  return `'${source}'`;
}

function isDir(source) {
  return fs.lstatSync(source).isDirectory();
}

function getDirs(source) {
  return getChildren(source).filter(isDir);
}

function isFile(source) {
  return fs.lstatSync(source).isFile();
}

function getFiles(source) {
  return getChildren(source).filter(isFile);
}

function getChildren(source) {
  console.log(source);
  return fs.readdirSync(source).map(function (name) {
    return path.join(source, name);
  });
}

function getFilesRecursive(source) {
  const children = getChildren(source);
  let result = [];

  children.forEach((child) => {
    if (isDir(child)) {
      result = [...result, ...getFilesRecursive(child)];
    } else if (isFile(child)) {
      result.push(child);
    }
  });

  return result;
}
