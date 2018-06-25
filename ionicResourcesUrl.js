/**
 * Hard-code the path to Ionic4 assets in the current script's
 * "data-resources-url" attribute, so that Ionic4 / StencilJS
 * loader will use it instead of inferring the path from the
 * current script's "src" attribute.
 * Once this package code is bundled, its "src" is moved
 * compared to the location of its assets.
 * Unfortunately this feature is not clearly documented yet
 * in Stencil (nor in @ionic/core), so let's cross fingers
 * that it will not change in the future…
 */
!function (doc) {
    const scripts = doc.querySelectorAll('script');
    const currentScript = scripts[scripts.length -1];
    const resourcesUrl = '/packages/runisland_ionic4/dist/ionic/';
    currentScript.setAttribute('data-resources-url', resourcesUrl);
}(document);
