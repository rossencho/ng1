export interface IWizardService{
    name:string;
    getName():string;
}
export class WizardService implements IWizardService{
    name:string="Angelov";
    public getName(){
        return this.name;
    }
}