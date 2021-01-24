
// nums = [5, 10, 50, 40, 70, 30, 25];

// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (num % 2 == 0) {
//         console.log(num, ': Is even Number');   
//     } else {
//         console.log(num, ': Is Odd Number');
//     }
// }
// friendsAge = [25, 30, 17, 14, 18, 20, 22, 24];
// for (let i = 0; i < friendsAge.length; i++) {
//     const num = friendsAge[i];
//     if (num % 2 == 0) {
//         console.log(num, ': Is even Number');   
//     } else {
//         console.log(num, ': Is Odd Number');
//     }
// }

function evenify(num){
    if (num % 2 == 0) {
        console.log(num, ': Is even Number');   
    } else {
        console.log(num, ': Is Odd Number');
    }
}
function evenify_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        evenify(num)
    }
}

nums = [5, 10, 50, 40, 70, 30, 25];
evenify_all(nums);

friendsAge = [25, 30, 17, 14, 18, 20, 22, 24];
evenify_all(friendsAge);