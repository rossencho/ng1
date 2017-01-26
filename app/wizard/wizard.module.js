"use strict";
var wizard_controller_1 = require("./wizard.controller");
var wizard_service_1 = require("./wizard.service");
//declare const $http:ng.IHttpService;
exports.wizardModule = angular
    .module('wizardModule', [])
    .service('WizardService', wizard_service_1.WizardService)
    .controller('WizardContoller', wizard_controller_1.WizardContoller.Dependencies);
//.run(['WizardService',function(WizardService:WizardService){}])
//.service('userProxy',UserProxy)
//.service('userBl',UserBl); 
