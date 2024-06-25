import { CompanyAccount } from "./CompanyAccount";

export class SpecialAccount extends CompanyAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (value: number): void =>{
        if(this.validateStatus()){
            this.setBalance(value+10)
            console.log(`Voce pegou um empréstimo de R$${(value).toFixed(2)} com acrescimo de R$${10.00}`)
        }
    };

}
