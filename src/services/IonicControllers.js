import { register } from "svelte-custom-elements";

//
// Private functions
//

// see if webcomponent is already created
const isRegistered = function (name) {
    return document.createElement(name).constructor !== HTMLElement;
};

// register webcomponent if not yet done
const registerWebComponentOnce = (selector, component) => {
    if (!isRegistered(selector)) {
        register(selector, component, []);
    }
};

// add DOM element if it not exists and return to caller
const registerDOMOnce = (selector) => {
    let controller = document.querySelector(selector);
    if (!controller) {
        controller = document.createElement(selector);
        document.body.appendChild(controller);
    }
    return controller;
}

// default pattern for many ionic UI controllers
const DefaultIonicController = (selector) => {
    return (options) => {
        const controller = registerDOMOnce(selector);
        return controller
            .create(options)
            .then(ionicitem => ionicitem.present());
    }
}

//
// API methods
//
export const IonicShowModal = (selector, component, componentProps) => {
    const controller = registerDOMOnce("ion-modal-controller");
    registerWebComponentOnce(selector, component);
    return controller
        .create({
            component: selector,
            componentProps
        })
        .then(modal => {
            modal.present();
            return modal.onWillDismiss()
        });
};

export const IonicShowPopover = (event, selector, component, componentProps) => {
    registerWebComponentOnce(selector, component);
    const controller = registerDOMOnce("ion-popover-controller");
    return controller
        .create({
            component: selector,
            componentProps
        })
        .then(popover => {
            popover.present();
            return popover.onWillDismiss()
        });
};

export const IonicShowLoading = DefaultIonicController("ion-loading-controller");
export const IonicShowPicker = DefaultIonicController("ion-picker-controller");
export const IonicShowAlert = DefaultIonicController("ion-alert-controller");
export const IonicShowToast = DefaultIonicController("ion-toast-controller");
export const IonicShowActionSheet = DefaultIonicController("ion-action-sheet-controller");
