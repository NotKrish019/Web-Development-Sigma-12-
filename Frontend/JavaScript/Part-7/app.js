const student = {
    name:"Krish",
    age: 19,
    eng:120,
    maths:112,
    hindi: 98,
    getavg(){
        let avg = (this.eng + this.maths + this.hindi)/3;
        console.log(avg);
    }
}