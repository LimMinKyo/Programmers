function solution(s, n) {
  const ALPHABET_LENGTH = 26;

  return [...s]
    .map((char) => {
      if (char === " ") {
        return char;
      }

      const charCode = char.charCodeAt();
      const charCodePlusN = charCode + n;
      const isLowerCase = charCode >= 65 && charCode <= 90;

      if (isLowerCase) {
        return charCodePlusN > 90
          ? String.fromCharCode(charCodePlusN - ALPHABET_LENGTH)
          : String.fromCharCode(charCodePlusN);
      }

      return charCodePlusN > 122
        ? String.fromCharCode(charCodePlusN - ALPHABET_LENGTH)
        : String.fromCharCode(charCodePlusN);
    })
    .join("");
}
