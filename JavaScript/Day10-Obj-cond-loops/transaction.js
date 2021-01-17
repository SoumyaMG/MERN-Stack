const customer={
    name:'suri',
    accNo:'SBI123',
    balance:1500,
    transaction:function(amount,code)
    {
        if(code==1)
        {
            this.balance=this.balance+amount
            return {
                notice:'Successfully Deposited',
                balance:this.balance
            }
        }
        else{
            if(amount>this.balance)
            {
                return 'insufficient amount'
            }
            else{
                this.balance=this.balance-amount
            return {
                notice:'Successfully Withdrawn',
                balance:this.balance
            }
            }
        }
    
    },
    currentBalance:function()
    {
        return this.balance
    }
}

console.log(customer.currentBalance()) //1500

console.log(customer.transaction(500,1))