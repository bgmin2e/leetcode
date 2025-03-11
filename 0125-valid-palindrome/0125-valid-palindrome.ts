function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        while(left < right && !isAlphaNumeric(s[left])){
            left++
        }
        while(left < right && !isAlphaNumeric(s[right])){
            right--
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++
        right--
    }
        return true
};


// 알파벳 또는 숫자인지 확인하는 함수
function isAlphaNumeric(c: string): boolean {
  return /^[a-zA-Z0-9]$/.test(c);
}