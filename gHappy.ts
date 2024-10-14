function gHappy (word: string): boolean{
    let isHappy: boolean = false;
    for(let i = 0; i < word.length; i ++){
        if (word[i] === 'g') {
            const leftG = (word[i - 1] === 'g');
            const rightG = (word[i - 1] === 'g');
            if (!leftG && !rightG){
                isHappy = false                
            }
            else{
                isHappy = true
            }
        }
    }
    return isHappy;
}