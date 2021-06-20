// Exercicio 1

const randomNumber = () => Math.floor(Math.random() * 101);

const transformCapitalLetter = (word) => word.toUpperCase();

const getFirstLetter = (word) => word[0];

const concatenateStrings = (word1, word2) => word1 + word2;

const generateDogImage = async () => {
    const resultApi = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await resultApi.json();
    return json;
}

module.exports = { randomNumber,
    transformCapitalLetter,
    getFirstLetter,
    concatenateStrings,
    generateDogImage
};