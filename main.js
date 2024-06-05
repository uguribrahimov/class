// 1                   
class person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    greet() {return `Salam, mənim adım ${this.name} və mən ${this.age} yaşındayam`}
 
}
let personn = new person("Ugur", 22)
console.log(personn.greet());






// 2       
class employee extends person {
 constructor(name,age,jobtitle){
    super (name,age);
    this.jobtitle = jobtitle
 }
 mesaj(){
    return `men ${this.name} ve men ${this.jobtitle} uzre isleyirem.Menim ${this.age} yasim var`
 }

}
let msj = new employee("Ugur", "Frontend", 22)
console.log(msj.mesaj());



// 3
class Bank {
    #balance; 
    constructor(balance) {
        this.#balance = balance
    }

    deposit(amount){
        if (amount>0) {
            this.#balance += amount;
            console.log(this.#balance);
        }
        else {
            console.log("-");
        }
    }

    withdraw(amount) {
        if (amount>0 && amount <= this.#balance){
            this.#balance -= amount
            console.log(this.#balance);
        }
        else {
            console.log("Redd edildi");
        }
    }
    getBalance(){
        return this.#balance
    }
}
let myBankAcc = new Bank (2000)
myBankAcc.deposit(500)
myBankAcc.withdraw(200)
// console.log(myBankAcc.getBalance());
