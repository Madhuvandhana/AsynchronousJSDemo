# AsynchronousJSDemo
Asynchronous Code, Files, and Promises


Demonstation on working with files; particularly, reading them, creating metrics on them, and storing them using promises.

# fileData.js
This module will export four methods:

# async getFileAsString(path)
This method must be an async function, and will implicitly return a promise. You will await any promises inside this method to get the result of said promise (such as the result of a file operation) in order to use it in later on in the method. If the method enters a state that should return a rejected promise, you should achieve this by throwing, as thrown exceptions inside async methods cause the returned promise to be in a rejected state.

This method will, when given a path, return a promise (implicitly, due to being defined as an async function) that resolves to a string with the contents of the files.

If no path is provided, it will return a rejected promise.

If there are any errors reading the file, the returned promise will reject rather than resolve, passing the error to the rejection callback.

# async getFileAsJSON(path)
This method must be an async function, and will implicitly return a promise. You will await any promises inside this method to get the result of said promise (such as the result of a file operation) in order to use it in later on in the method. If the method enters a state that should return a rejected promise, you should achieve this by throwing, as thrown exceptions inside async methods cause the returned promise to be in a rejected state.

This method will, when given a path, return a promise that resolves to a JavaScript object. You can use the JSON.parse function to convert a string to a JavaScript object (if it's valid!).

If no path is provided, it will return a rejected promise.

If there are any errors reading the file or parsing the file, the returned promise will reject rather than resolve, passing the error to the rejection callback.

# async saveStringToFile(path, text)
This method must be an async function, and will implicitly return a promise. You will await any promises inside this method to get the result of said promise (such as the result of a file operation) in order to use it in later on in the method. If the method enters a state that should return a rejected promise, you should achieve this by throwing, as thrown exceptions inside async methods cause the returned promise to be in a rejected state.

This method will take the text supplied, and store it in the file specified by path. The function should return a promise that will resolve to true when saving is completed.

If no path or text is provided, it will return a rejected promise.

If there are any errors writing the file, the returned promise will reject rather than resolve, passing the error to the rejection callback.

# async saveJSONToFile(path, obj)
This method must be an async function, and will implicitly return a promise. You will await any promises inside this method to get the result of said promise (such as the result of a file operation) in order to use it in later on in the method. If the method enters a state that should return a rejected promise, you should achieve this by throwing, as thrown exceptions inside async methods cause the returned promise to be in a rejected state.

This method will take the obj supplied and convert it into a JSON string so that it may stored as in a file. The function should return a promise that will resolve to true when saving is completed.

If no path or obj is provided, it will return a rejected promise.

If there are any errors writing the file, the returned promise will reject rather than resolve, passing the error to the rejection callback.

# textMetrics.js
This module will export a single method, createMetrics(text) which will scan through the text and return an object with the following information based on the lowercased version of the text:

{
    totalLetters: total number of letter characters in the text,
    totalNonLetters: total number of non-letters in the text,
    totalVowels: total number of vowels in the text (not counting y),
    totalConsonants: total number of consonants in the text (counting y),
    totalWords: total number of words in the text; a word is defined as any sequence of letters broken by any not-letter. For example, the phrase to-do is two words; a word does not start until a letter appears,
    uniqueWords: total number of unique words that appear in the lowercased text,
    longWords: number of words in the text that are 6 or more letters long; this is a total count of individual words, not unique words,
    averageWordLength: the average number of letters in a word in the text; this is counting the individual words, not unique words,
    wordOccurrences: a dictionary of each word and how many times each word occurs in the text.
}


# createMetrics("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23")

Will return:

{
    totalLetters: 40 // (helllomythisisagreatdaytosayhelllohelllo),
    totalNonLetters: 27 // (,  -!        .\n\n\t! 2 3 4 23) 
    totalWords: 11 //(["helllo","my","this","is","a","great","day","to","say","helllo","helllo"] is 11 words),
    totalVowels: 14,
    totalConsonants: 26,
    uniqueWords: 9 //(helllo, my, this, is, a, great, day, to, say),
    longWords: 3,
    averageWordLength: 3.6363636363636362 // (this will round differently on each machine",
    wordOccurrences: {
        a: 1
        day: 1
        great: 1
        helllo: 3
        is: 1
        my: 1
        say: 1
        this: 1
        to: 1
    } // this may or may not sort in your system; order DOES NOT MATTER
}   

