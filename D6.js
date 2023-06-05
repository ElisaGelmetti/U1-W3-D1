// /* ESERCIZIO 1
//   Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
//   prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
// */
const string =['gomma', 'matita', 'penna', 'righello']
const string2 = ['rosso', 'blu', 'viola', 'verde']
let string3 = string.concat(string2)
const someString = string3.slice(0,2)
const anotherString = string3.slice(5,8) //(-3) ultimi 3 parametri del secondo parametro
const totale = someString + anotherString
const maiuscolo = totale.toUpperCase()
console.log(maiuscolo)


// /* ESERCIZIO 2 (for)
//   Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
// */



const return10RandomElements = function(){
  let result = [ ]
  for( let i=0; i<10;i++){
    let randomNumber = Math.floor(Math.random()*101) 
    result.push(randomNumber)
  }
  return result
}
console.log(return10RandomElements())


// /* ESERCIZIO 3 (filter)
//   Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
// */

const justEvenNumbers = function(arr){
  arr.filter((number) => number % 2 === 0)
  return newArr
}
console.log(justEvenNumbers([5,8,4,10,7])) 




/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
// let somma = [1,2,3,4,5,6]
// somma.forEach((som) => {
//   console.log(somma+ somma)
// }
// )

const red = function(arr){
  let tot =0
  arr.forEach((num) =>{
    tot += num // tot = tot + num
  })
  return tot
}
console.log(red([2,9,56,100]))


// /* ESERCIZIO 5 (reduce)
//   Scrivi una funzione per sommare i numeri contenuti in un array
// */
const x = [1,2,6,4,5]{
 let total = x.reduce((total, sigleNumer) =>{
  return total + sigleNumer
})
return total
}
console.log('total', total)



/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
const arr = [1,2,3]
const n = 5
const addN = function (arr,n){
 let newArr = []
  for( let i =0; i<arr.length;i++) {
    newArr.push(arr[i] + n)
  }
}
console.log(addN)


// let newArr = arr.map((number) => {
//   return number + n
// })
// return newArr
// }
// console.log(addN([67,4,34,78], 86))

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const wordsToNumbers = function (arr){
  let arrayOflengths = arr.map(word => {
    return word.length
  })
  return arrayOflengths
}
console.log(wordsToNumbers(["EPICODE", "is", "great"]))

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

const justOddNumber = function(){
  let odds= []
  for (let i=1; i 100;i++) {
    if ( i % 2 !== 0) {
      adds.push(1)
    }
  }
  return odds
}
console.log(justOddNumber())

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

const findTheOldestMovie = function(){
  let oldest= movies[0] //per iniziare la comparazione
movies.forEach(movie => {
  if(parseInt(movie.Year) < parseInt(oldest.Year)){
oldesr=movie
  }
  return oldest
})

}
console.log(findTheOldestMovie())

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

const findNumber = function(){
  return movies.length
}
console.log(findNumber())




/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/


const justTheTitle = function (){
  let movieTitle= movie.map((movie) => {
    return movie.Title
  })
  return movieTitle
}

console.log(justTheTitle())


/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const millenium = function() {
  let moderMovie = movie.filter((movie) => {
  
return parseInt(movie.Year) >= 2000
  })
}
console.log(millenium())


/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

const anni = function()
{
  const sum = movies.reduce((acc, currentValue) => {
    return acc + parseInt(currentValue, Year)
  } , 0)
  return sum
   
}
console.log(anni())



/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

const FindById = function(id){
  let foundMovie = movies.find((movie) => {
    return movie.imbID === id
  })
  return foundMovie
}

console.log(FindById('tt0057261'))
/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
const findByYear = function(year){
  let foundMovie = movie.findIndex(movie =>{
    return movie.Year === year
  })
  return year
}