import {IWizardService} from "./wizard.service";
export class WizardContoller{
    static Dependecies=['$scope', 'WizardService', WizardContoller];
    public wizard:string='';
    public middle:string;
    constructor($scope:ng.IScope, WizardService:IWizardService){
        this.wizard = "Blagoev";
        this.middle = WizardService.getName();
    }
    
}