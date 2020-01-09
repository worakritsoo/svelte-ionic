import { routes } from "@sveltech/routify/tmp/routes";


export const myRoutes = routes.filter(route => {
    return route.name != "ionic/Games" &&
        route.name != "ionic/Music" &&
        route.name != "ionic/ModalExtra" &&
        route.name != "ionic/Navhome" &&
        route.name != "ionic/NavDetail" &&
        route.name != "ionic/PopoverExtra" &&
        route.name != "ionic/NavList" &&
        route.name != "ionic/AltDetails";
});