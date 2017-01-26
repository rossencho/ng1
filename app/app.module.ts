import {appComponent} from "./app.component";
import {wizardModule} from "../app/wizard/wizard.module";
import {MainContoller} from "./app.controller";

declare const angular:angular.IAngularStatic;


export const appModule = angular
    .module('appModule',[
        wizardModule.name
        ])
    .controller('MainContoller', MainContoller.Dependecies)
    .component('heros',appComponent)
    