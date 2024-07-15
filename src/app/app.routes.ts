import { Routes } from '@angular/router';
import path from 'path';
import { title } from 'process';

export const routes: Routes = [

    {
        path: "dashboard",
        loadComponent: () => import("./dashboard/dashboard.component"),
        children: [
            {
                path: "change-detection",
                title: "Change detection",
                loadComponent: () => import("./dashboard/pages/change-detections/change-detections.component"),
            },
            {
                path: "defer-options",
                title: "Defer Options",
                loadComponent: () => import("./dashboard/pages/defer-options/defer-options.component"),
            },
            {
                path: "defer-views",
                title: "Defer Views",
                loadComponent: () => import("./dashboard/pages/defer-views/defer-views.component"),
            },
            {
                path: "user/:id",
                title: "Useer",
                loadComponent: () => import("./dashboard/pages/user/user.component"),
            },
            {
                path: "users",
                title: "Useers",
                loadComponent: () => import("./dashboard/pages/users/users.component"),
            },
            {
                path: "views-transition",
                title: "Views Transition",
                loadComponent: () => import("./dashboard/pages/views-transition/views-transition.component"),
            },
            {
                path: "", redirectTo: "control-flow", pathMatch: "full",

            }
        ]
    }, {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"

    }

];
