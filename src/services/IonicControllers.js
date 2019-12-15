// https://svelte.dev/repl/a1f2a77ba7704391badb92cd9ee1b7c2?version=3.16.4
import { register } from "svelte-custom-elements";

const isRegistered = function (name) {
    return document.createElement(name).constructor !== HTMLElement;
};

export const registerOnce = (selector, component) => {
    if (!isRegistered(selector)) {
        register(selector, component, []);
    }
};

const registerDOMOnce=(selector)=> {
    let controller = document.querySelector(selector);
    if (!controller) {
        controller=document.createElement(selector);
        document.body.appendChild(controller);
    }
    return controller;
}

// not exposing other methods nor events
export const IonicShowModal = (selector, component, componentProps) => {
    const controller = registerDOMOnce("ion-modal-controller");
    registerOnce(selector, component);
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

export const IonicShowPopover = (event,selector, component, componentProps) => {
    registerOnce(selector, component);
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

export const IonicShowLoading = (options) => {
    const controller = registerDOMOnce("ion-loading-controller"); 
    return controller
        .create(options)
        .then(loading =>loading.present());
};

export const IonicShowPicker = (options) => {
    const controller = registerDOMOnce("ion-picker-controller"); 
    return controller
        .create(options)
        .then(picker =>picker.present());
};

export const IonicShowAlert = (options) => {
    const controller = registerDOMOnce("ion-alert-controller"); 
    return controller
        .create(options)
        .then(alert =>alert.present());
};

