var Mac = function macNumber(name, num){
    this.name = name;
    this.num = num;
}

const mac = new Mac('mac', 2342345)
console.log(mac)


////es6

class Macc {
    constructor(name, num){
        this.name = name;
        this.num = num;
    }
}
const macc = new Macc('macc', 234245324344)
console.log(macc)