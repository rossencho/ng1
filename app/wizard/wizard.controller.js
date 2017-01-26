"use strict";
var WizardContoller = (function () {
    function WizardContoller($scope, WizardService) {
        this.wizard = '';
        this.wizard = "Blagoev";
        this.middle = WizardService.getName();
        this.getRecords(WizardService); /* Just for test purposes*/
    }
    WizardContoller.prototype.getRecords = function (WizardService) {
        WizardService.getRecords()
            .then(function (result) {
            console.log(result.data.records);
        }, function (error) {
            console.log(error);
        });
    };
    return WizardContoller;
}());
WizardContoller.Dependencies = ['$scope', 'WizardService', WizardContoller];
exports.WizardContoller = WizardContoller;
