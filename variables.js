const r= require('readline');

const rl = r.createInterface({
input: process.stdin,
output: process.stdout
});

// rl.question('Enter First Number: ', (a) => {
// rl.question('Enter Second Number: ', (b) => {
// const sum= Number(a) + Number(b);
// console.log(`The sum of ${a} and ${b} is ${sum}`);
// rl.close();
// });
// });


// take input from user and check if even or odd

rl.question('Enter First Number: ', (a) => {

const num= Number(a);
if(num%2===0){
    console.log(`The number ${num} is Even.`);
}else{
    console.log(`The number ${num} is Odd.`);

}
rl.close();
});