// const r= require('readline');

// const rl = r.createInterface({
// input: process.stdin,
// output: process.stdout
// });

// // rl.question('Enter First Number: ', (a) => {
// // rl.question('Enter Second Number: ', (b) => {
// // const sum= Number(a) + Number(b);
// // console.log(`The sum of ${a} and ${b} is ${sum}`);
// // rl.close();
// // });
// // });


// // take input from user and check if even or odd

// rl.question('Enter First Number: ', (a) => {

// const num= Number(a);
// if(num%2===0){
//     console.log(`The number ${num} is Even.`);
// }else{
//     console.log(`The number ${num} is Odd.`);

// }
// rl.close();
// });


// function smallestNumber(nums) {
//     // 1. Convert all numbers to strings
//     let strNums = nums.map(String);
    
//     // 2. Sort using the custom comparator
//     strNums.sort((a, b) => {
//         let order1 = a + b;
//         let order2 = b + a;
//         // If order1 is smaller, a should come first (return negative)
//         return order1.localeCompare(order2);
//     });
    
//     // 3. Join the sorted array into a single string
//     let result = strNums.join('');
    
//     // 4. Handle edge case for leading zeros (e.g., -> "0")
//     return result === '0' ? '0' : result.trim('0');
// }

// // Example usage:
// const nums = [0,9,90,999,99999];
// console.log(smallestNumber(nums)); // Output: "3033459"


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function findImmediateNeighbor(root, u) {
    if (!root || !u) return null;

    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();

            // If we found the target node
            if (curr === u) {
                // If it is the last node in this level
                if (i === levelSize - 1) {
                    return null;
                }
                // Otherwise, the next item in the queue is its neighbor
                return queue;
            }

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
    }

    return null;
}

const root = new TreeNode(1);
const node2=new TreeNode(2);
const node3=new TreeNode(3);
const node4=new TreeNode(4);
const node5=new TreeNode(5);
const node6=new TreeNode(6);

root.left=node2;
root.right=node4;
node2.left=node3;
node4.left=node5;
node4.right=node6;
node5.left=null;
node6.left=null;
node3.left=null;

let u=4;

let result=findImmediateNeighbor(root, u);

console.log(result ? result.val : null);