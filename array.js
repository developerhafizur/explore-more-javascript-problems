const conutry = 'bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, roll: 12, name: 'fagun'};
const friends = [13, 14, 15, 16, 17, 18, 19, 20];

function add(num1, num2){
    return num1 + num2;
}
console.log(typeof conutry);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
//check array using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);


//--------------
console.log(friends.includes(19));
console.log(friends.includes(21));

if(friends.indexOf(222) !== -1){
console.log('airokom kisu e nai');

}

//concat
const newFriendsAge = [12, 13, 11, 13];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends)














