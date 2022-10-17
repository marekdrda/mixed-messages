// Source strings for messages
const barbSigns = ["oak", "boulder", "fire", "war", "hammer", "fist", "thunder", "horse", "blood", "bear", "smoke", "bone"]
const modal = ["should", "shouldn't", "will", "will not", "must", "must not"];
const verb = ["find", "leave", "fear", "protect", "fight", "teach", "kiss", "kill", "strike", "protect", "hunt"];
const person = ["witch", "man", "hunter", "dog", "dragon", "king", "queen", "bastard", "child", "snail", "frog", "raven", "old woman", "oracle"];
const time = ["today", "this week", "very soon", "next year", "one day"];

// Get random string
const getRandom = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Write the message
let message = `Your barbaric sign is ${getRandom(barbSigns)}. You ${getRandom(modal)} ${getRandom(verb)} the ${getRandom(person)} ${getRandom(time)}.`;
console.log(message);