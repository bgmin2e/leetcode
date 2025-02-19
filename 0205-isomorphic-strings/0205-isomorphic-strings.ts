function isIsomorphic(s: string, t: string): boolean {
    const sToT = new Map<string, string>();
    const tToS = new Map<string, string>();

  for (let i = 0; i < t.length; i++){
    const sChar = s[i];
    const tChar = t[i]

    if((sToT.has(sChar) && sToT.get(sChar) !== tChar) || (tToS.has(tChar) && tToS.get(tChar) !== sChar) ){
        return false;
    }

    sToT.set(sChar, tChar);
    tToS.set(tChar, sChar);
  }

  return true;
};