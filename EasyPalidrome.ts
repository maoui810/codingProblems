function isPalindrome(s: string): boolean {
    const j=s.replace(/[\W_]+/g,"");
    const mainS=j.toLocaleLowerCase();
    const reS=mainS.split('').reverse().join('');
    return mainS===reS;
};


console.log(isPalindrome('"A man, a plan, a canal: Panama"'));