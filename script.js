document.addEventListener('DOMContentLoaded',function(){
let favMovie = (name = 'world', movie = 'The Room') => console.log(`My name is ${name} and my favorite moveie is ${movie}`)
favMovie()

let getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
let getFirstName2 = fullName => fullName.split(' ')[0];

let expAndProduct = (a,b) => {
let exponent = Math.pow(a,b);
let product = a*b;
console.log(`${exponent}`)
console.log(`${product}`)
return {exponent, product}
}
let arr = ['Darius','Florida','Pizza']
let nextFunc = (name,location,favFood) => {
    let myName=name;
}
nextFunc(...arr)

let otherFunc = (a) => {
let spreadStr= [...a]
for(let i = 0; i < spreadStr.length; i++){
    console.log(spreadStr[i])
}
}

otherFunc('Random string');

})