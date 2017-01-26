import {IWizardService} from "./wizard.service";
export class WizardContoller{
    static Dependencies=['$scope', 'WizardService', WizardContoller];
    public wizard:string='';
    public middle:string;
    constructor($scope:ng.IScope, WizardService:IWizardService){
        this.wizard = "Blagoev";
        this.middle = WizardService.getName();
        this.getRecords(WizardService);/* Just for test purposes*/
        
    }

   public getRecords(WizardService:IWizardService){
        WizardService.getRecords()
        .then(function (result:any) {
            console.log(result.data.records);
	    }, 
	    function(error:any){
    	    console.log(error);
        });
   }
    
}