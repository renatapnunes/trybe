// ---------------------------------- funções encode() e decode() refatoradas
const code = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5'
};

const arrayCode = Object.entries(code);

const encode = encodeInput => {
    let encodeOutput = '';

    [...encodeInput].forEach((letra) => {
        arrayCode.forEach(([ key, num ]) => {
            if (letra === key) {
                letra = num;
            }
        });
        encodeOutput += letra;
    });

    return encodeOutput;
};

console.log(encode('hello'));

const decode = decodeInput => {
    let decodeOutput = '';

    [...decodeInput].forEach((letra) => {
        arrayCode.forEach(([ key, num ]) => {
            if (letra === num) {
                letra = key;
            }
        });
        decodeOutput += letra;
    });

    return decodeOutput;
};

console.log(decode(encode('hello')));

// ---------------------------------- funçao techList() refatorada

const techList = (tecnologias, name) => {
    if (tecnologias.length === 0) {
        return 'Vazio!';
    } else {
        tecnologias.sort();
        return tecnologias.map((tecnologia) => {
            const obj = {
                tech: '',
                name: ''
            };
            obj.tech = tecnologia;
            obj.name = name;
            return obj;
        });
    }
};

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));

// ---------------------------------- funçao hydrate() refatorada

const hydrate = stringInput => {
    // parametros do metodo match definidos com base em:
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
    const arrayStringNumbers = stringInput.match(/\d/g);

    const arrayNumbers = arrayStringNumbers.map((stringNumber) => Number(stringNumber));

    const sum = arrayNumbers.reduce((acc, crr) => acc += crr);

    return sum === 1 ? `${sum} copo de água` : `${sum} copos de água`;
};

console.log(hydrate('1 cachaça'));

module.exports = {
    encode,
    decode,
    techList,
    hydrate
}