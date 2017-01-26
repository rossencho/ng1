"use strict";
var wizard_controller_1 = require("./wizard.controller");
var wizard_service_1 = require("./wizard.service");
exports.wizardModule = angular
    .module('wizardModule', [])
    .service('WizardService', [function () { return new wizard_service_1.WizardService(); }])
    .controller('WizardContoller', wizard_controller_1.WizardContoller.Dependecies);
//.service('userProxy',UserProxy)
//.service('userBl',UserBl); 
