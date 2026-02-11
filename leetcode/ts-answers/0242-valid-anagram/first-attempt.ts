function isAnagram(s: string, t: string): boolean {
    
    if (s.length !== t.length) {
        return false; 
    }

    let obj = {}

    for (let i=0; i < s.length; i++) {
        
        obj[s[i]] = (obj[s[i]] || 0) + 1;
    }
    
    for (let i=0; i < t.length; i++) {
        if (!obj[t[i]]) {
            return false
        }
        obj[t[i]] = (obj[t[i]] || 0) - 1;
         
    }
    return true
};