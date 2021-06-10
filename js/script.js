// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
 var parola1 = prompt('inserisci parola')
 var parola2 = prompt('inserisci una parola')

 function prova(parola1,parola2){
     var ris = 'sono uguali'
     if(parola1.length==parola2.length){
         ris = 'sono uguali'
     } 
     else if(parola1.length>parola2.length){
         ris = parola1
     }
     else{
         ris = parola2
     }
     return ris;
 }

 var ris = prova(parola1,parola2);
 console.log(ris)