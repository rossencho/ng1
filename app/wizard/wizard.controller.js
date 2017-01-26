"use strict";
var WizardContoller = (function () {
    function WizardContoller($scope, WizardService) {
        this.wizard = '';
        this.wizard = "Blagoev";
        this.middle = WizardService.getName();
    }
    return WizardContoller;
}());
WizardContoller.Dependecies = ['$scope', 'WizardService', WizardContoller];
exports.WizardContoller = WizardContoller;
