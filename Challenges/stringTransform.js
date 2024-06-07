function transformString(str) {
    const length = str.length;

    // Let Check divisibility by 15 first to handle both 3 and 5
    if (length % 15 === 0) {
        // Let Reverse the string and then convert each character to its ASCII code if both conditions happened
        const reversedStr = str.split('').reverse().join('');
        return reversedStr.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // Let Reverse the string if length % 3 === 0
        return str.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // Let  Replace each character with its ASCII code if Length % 5 == 0
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        // Let  Return the original string if none of the conditions are met
        return str;
    }
}
// Let Run some Examples
console.log( transformString("Hamburger"));
console.log(transformString("Oranges"));
console.log( transformString("Pizza"));
console.log( transformString("Chocolate Chip Cookie"));
console.log(transformString("Steak"));
