function palindrome(string) {
    const palindrome = string
        .split('') // if you make this a space, the word order will be reversed
        .reverse()
        .join(''); // if you make this a space, then when the words are joined, space is retained
    return palindrome;
}

console.log(palindrome('hi mom'));
