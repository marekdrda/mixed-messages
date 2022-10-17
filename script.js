// Source strings for messages
const barbSigns = ["oak", "boulder", "fire", "war", "hammer", "fist", "thunder", "horse", "blood", "bear", "smoke", "bone"]
const shouldOrShouldnt = ["should", "shouldn't"];
const verb = ["find", "leave", "fear", "protect", "fight", "teach", "kiss", "kill", "strike", "protect", "hunt"];
const person = ["witch", "man", "hunter", "dog", "dragon", "king", "queen", "bastard", "child", "snail", "frog", "raven", "old woman", "oracle"];
const time = ["today", "this week", "very soon", "next year", "one day"];

// Get random string
const getRandom = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandom(verb));
console.log(getRandom(verb));
console.log(getRandom(verb));
console.log(getRandom(time));
console.log(getRandom(time));
console.log(getRandom(time));
console.log(getRandom(person));
console.log(getRandom(shouldOrShouldnt));
console.log(getRandom(barbSigns));