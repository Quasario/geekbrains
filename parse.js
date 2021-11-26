let text1 = "'Some dude's direct speech'";
let pattern1 = /'/; // //g

while (pattern1.test(text1)) {
    text1 = text1.replace(pattern1, '"');
}
console.log(text1);


let text2 = "'Some dude's direct speech'";
let pattern2 = /\B'.+'\B/;

while (pattern2.test(text2)) {
    text2 = text2.replace(/\B'/, '"');
    text2 = text2.replace(/'\B/, '"');
}
console.log(text2);