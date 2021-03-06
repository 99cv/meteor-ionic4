# Meteor Ionic4 demo App with Blaze and FlowRouter

This is an example of a Meteor 1.7 App using Blaze template engine, FlowRouter, and Ionic4 Web Components.


## Run the demo

```bash
$ meteor npm install
$ meteor run
```

Note: if you want to access your development machine localhost from another machine (typically from a mobile device),
you must explicitly specify the [`ROOT_URL`](https://docs.meteor.com/environment-variables.html#ROOT-URL) environment variable:
```bash
$ ROOT_URL="http://<ip-address>:<port>" meteor run
```
where:
- `<ip-address>` is the IP of your dev machine (e.g. `192.168.1.10`)
- `<port>` is the [port](https://docs.meteor.com/environment-variables.html#PORT) of your localhost (typically `3000`)


## Start from scratch

Steps to reproduce this demo App:
1. Create your Meteor project: `$ meteor create myProjectName` (uses Blaze by default)
2. Add [FlowRouter](https://atmospherejs.com/kadira/flow-router) Atmosphere package: `$ meteor add kadira:flow-router`
3. Add [BlazeLayout](https://atmospherejs.com/kadira/blaze-layout) Atmosphere package: `$ meteor add kadira:blaze-layout`
4. Add [Ionic4](https://atmospherejs.com/runisland/ionic4) Atmosphere package: `$ meteor add runisland:ionic4`

All the demo code is contained in the `client` folder.


## Change compared to pure Blaze

Unfortunately, Ionic4 interferes with the templates position / inner structure, making [event maps](http://blazejs.org/api/templates.html#Event-Maps) not effective at all. Use template `onRendered` hook with `this.$(selector).on` to attach event listeners instead.

Example:
```javascript
Template.myTemplateName.onRendered(function () {
  this.$('.myTargetElementSelector').on('click', function () {
    // If using a `function () {}`, jQuery will make `this` as the currentTarget element.
    // You can use a fat arrow function instead `() => {}` to keep `this` as the template instance.
  });

  // If you want to use event delegation, for example if your elements are dynamic:
  // https://learn.jquery.com/events/event-delegation/
  this.$('.parentContainerButWithinTemplate').on('click', '.childElementsSelector', function () {
    // callback operations.
  });
});
```

instead of:
```javascript
Template.myTemplateName.events({
  'click .myTargetElementSelector'() {},
  'click .parentContainerButWithinTemplate.childElementsSelector'() {},
});
```


## Bug in Firefox

Note: there are still some issues in browsers different from Chrome.

Please feel free to submit issues on the [ionic-team/ionic issue tracker](https://github.com/ionic-team/ionic/issues).
