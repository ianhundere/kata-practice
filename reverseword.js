let str = 'The quick brown fox jumped over the lazy dog.';

function reverseOrderOfSentence(string) {
    const reverseSentence = string
        .split(' ')
        .reverse()
        .join(' ');
    return reverseSentence;
}
console.log(reverseOrderOfSentence(str));
