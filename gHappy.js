function gHappy(word) {
    var isHappy = false;
    for (var i = 0; i < word.length; i++) {
        if (word[i] === 'g') {
            var leftG = (word[i - 1] === 'g');
            var rightG = (word[i - 1] === 'g');
            if (!leftG && !rightG) {
                isHappy = false;
            }
            else {
                isHappy = true;
            }
        }
    }
    return isHappy;
}

console.log(gHappy("xxggxx"));
console.log(gHappy("xxgxx"));
console.log(gHappy("xxggyygxx"));
