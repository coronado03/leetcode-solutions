function isPalindrome(s: string): boolean {
    let stringWithoutSpaces: string = s.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
    
    for (let i=0; i < stringWithoutSpaces.length; i++) {
        let beg = stringWithoutSpaces[i];
        let end = stringWithoutSpaces[(stringWithoutSpaces.length - i) - 1];

        if (beg != end)
            return false
    }
    return true
};