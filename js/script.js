// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
//  var parola1 = prompt('inserisci parola')
//  var parola2 = prompt('inserisci una parola')

//  function prova(parola1,parola2){
//      var ris = 'sono uguali'
//      if(parola1.length==parola2.length){
//          ris = 'sono uguali'
//      } 
//      else if(parola1.length>parola2.length){
//          ris = parola1
//      }
//      else{
//          ris = parola2
//      }
//      return ris;
//  }

//  var ris = prova(parola1,parola2);
//  console.log(ris)


// snack2
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

var array = [1,2,3,4,5,6,7,8,9,10,11,12]
var min = parseInt(prompt('inserisci il numero più basso'))
var max = parseInt(prompt('inserisci il numero più alto'))

var arrayfiltered = arrayfilter(array,min,max)
console.log(arrayfiltered)

function arrayfiltered (arrayin,min,max){

    if(min>max){
        var temp = min;
        min = max;
        max = temp;
    }

    var arrayout = []
    for(var i= min; i <= max; i++){
        arrayout.push(arrayin[i]);
        
        return arrayout
    }
}