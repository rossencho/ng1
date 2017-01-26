
export interface IWizardService{
    name:string;
    getName():string;
    getRecords():any;
}
export class WizardService implements IWizardService{
    name:string="Angelov";
   
    constructor(private $http: ng.IHttpService){} 

    public getName(){
        return this.name;
    }

    public getRecords():any{
        return this.$http.get('./app/test.json');
    }
}