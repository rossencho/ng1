import {WizardContoller} from "./wizard.controller";
import {WizardService} from "./wizard.service";
import IModule = angular.IModule;
import IAngularStatic = angular.IAngularStatic;



declare const angular:IAngularStatic;

export const wizardModule: IModule = angular
    .module('wizardModule',[])
    .service('WizardService',[()=>new WizardService()])
    .controller('WizardContoller', WizardContoller.Dependecies)
   
    //.service('userProxy',UserProxy)
    //.service('userBl',UserBl);