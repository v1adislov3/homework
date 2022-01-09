let secret = Math.random ();
secret = secret * 100;
secret = Math.floor(secret) + 1;

console.log (secret);

for(let i = 1; i <= 10; i++){

let variant = +prompt(`Ваш вариант (${i}/10)`);
if( secret == variant){
alert ('Yes! You Win!');
isFail = false;
break;
}else if(secret > variant) {
alert ('My number bigger')

} else {
alert ('My number smaller')

}
}
if(isFail){
alert(`Game Over Secret is ${secret}`);
}