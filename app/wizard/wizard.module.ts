import {WizardContoller} from "./wizard.controller";
import {WizardService} from "./wizard.service";
import IModule = angular.IModule;
import IAngularStatic = angular.IAngularStatic;



declare const angular:IAngularStatic;
//declare const $http:ng.IHttpService;

export const wizardModule: IModule = angular
    .module('wizardModule',[])
    .service('WizardService', WizardService)
    .controller('WizardContoller', WizardContoller.Dependencies)
    //.run(['WizardService',function(WizardService:WizardService){}])
   
    //.service('userProxy',UserProxy)
    //.service('userBl',UserBl);