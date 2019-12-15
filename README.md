# Ionic Svelte UI demo
Try out to get svelte-routing integrated with ionic tabs in svelte.

To run this, you need to run `npm run dev`. Routing (deeplinking) through the SPA will be served through localhost:8080 (not :5000)

Also published as web app: https://ionicsvelte.firebaseapp.com

Features (vision/realised) 
- All Ionic Framework UI components (80% done)
- Run as SPA (100% done)
- Service Worker setup via workbox (0%) 
- PWA compliance via Ligthouse score (0%))
- Stores/RXJS (0%)
- Localstorage via localforage (50%)
- Firebase SDK (0%)
- Capacitor for mobile native support (25%)

# Known issues

## IonTab present not ready onMount
Issue is in IonTab.svelte. The onMount triggers too earlier for the controller to be able to expose the `present` method for programmatically setting the tab selected by default.

The ionic api docs state you can predefine as property to ion-tab-bar, but this does not seem to work.

Update 13/12/2019: workaround: add ion-router (with no routes! as we don't want hash routes) to IonTab so at least the default tab is not shown as per ion-tabs.tsx (see https://github.com/ionic-team/ionic/issues/20060). No ugly UI, but bit hacky code to find when `present` is present. And we get ionic errors in console because of router issue.

So besides workaround, I need a bit of help on svelte onMount wrt webcomponents.

## IonMenu gives warning
Need to use other api

## IonNav no navigation and ion-back-button does not show
There is much going on in the IonNav

## Fly in has a jitter
Splash screen image has a jitter

# Todo's
A number of todo's:
- add the popoover and other controller related items
- try the css styling as per documentation (theming)
- look at awesome rollup and add typescript
- fix rollup copy of files in assets folder
- do some binding on inputs and other interactive elements
- ionicons for menu - colors and other names
- ionicons part has some unknown icons, make larger
- virtual scroll??
- ion-img?
- make it a PWA
- better names for controller API?
- NAV over tab?
- make it more sveltish (code, store, bindings, animations)
- publish on firebase hosting
- try some cordova/ionic native
- singleton classes https://alligator.io/js/js-singletons/
- place routes in better place (pages folder probably, to avoid repeating /../)