# Ionic Svelte UI demo
Project to integrate Ionic UI goodies with svelte - with source code viewer

To run this, you need to run `npm run dev`. Routing (deeplinking) through the SPA will be served through localhost:8080 (not :5000)

Also published as web app: https://ionicsvelte.firebaseapp.com

**NEW FEATURE: click to view source! For all components (except tab) you can click the lower right source button to view the source and copy/paste in your app. If you use fullscreen view, the menu will be a sidepanel instead of a hamburger!**

**NEW FEATURE2: click on share button in source view to link directly to the Ionic API docs**

Do you like this work? Please star this project! 

<img alt="Screen1.PNG" src="https://raw.githubusercontent.com/Tommertom/svelte-ionic-app/master/doc/Screen1.PNG" width="75%" >

And the source view with copy feature and you can select text with the mouse:
<img alt="Screen2.PNG" src="https://raw.githubusercontent.com/Tommertom/svelte-ionic-app/master/doc/Screen2.PNG" width="75%" >

All features (vision/realised) 
- All Ionic Framework UI components (99% done)
- Run as SPA (100% done) - Router via "svelte-routing" repo
- Service Worker setup via workbox (50%) 
- PWA compliance via Ligthouse score (40%))
- Stores (0%)
- RXJS (25%)
- Localstorage via localforage (50%)
- Firebase SDK (0%)
- Capacitor for mobile native support (100%)
- Ionic Theming in local styles and global CSS (100%)

# Known issues

## Ion Tabs
May need to refactor the IonTab.svelte

## IonMenu gives warning
Need to use other api

## ion-back-button does not show
Ion Back Button does not appear in the app. Neither in a REPL. Made a custom version.

## Nav needs customElement
Not necessarily an issue, but still a bit undesireable to make a custom element to be using a IonNav (as in `<ion-nav root="my-element">`)

# Todo's
A number of todo's:
- ~~add the popoover and other controller related items~~
- ~~try the css styling as per documentation (theming)~~
- ~~look at awesome rollup and add typescript -~~ not mature enough!!
- ~~fix rollup copy of files in assets folder~~
- ~~do some binding on inputs and other interactive elements~~
- ionicons for menu - colors and other names
- ionicons part has some unknown icons, make larger
- ~~virtual scroll??~~
- ~~ion-img? (will work, but not tried)~~
- ~~make it a PWA~~
- ~~better names for controller API?~~
- NAV over tab?
- make it more sveltish (code, store, bindings, animations)
- ~~publish on firebase hosting~~
- try some cordova/ionic native
- singleton classes https://alligator.io/js/js-singletons/
- place routes in better place (pages folder probably, to avoid repeating /../)
- consider Contexts for exposing controllers?
- ~~split pane~~
- SSR
- ~~to docs link https://ionicframework.com/docs/api/input~~
- https://css-tricks.com/what-i-like-about-writing-styles-with-svelte/