let phrase = 'La programación web es fundamental para el progreso';

let words = phrase.split(' ');

let numberWords = words.length;

alert("La frase tiene " + numberWords + " palabras.");

/* 3. En base al resultado del ejercicio anterior
agrupar en un array únicamente las
palabras que tengan mas de 3 letras.*/

let longWord = words.filter(palabra => palabra.length > 3);

alert("Palabras con más de 3 letras: " + longWord.join(', '));