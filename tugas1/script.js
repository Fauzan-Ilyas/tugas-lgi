function polapola() {
    let pola = "";
    let mulai = 1;  
    
    for (let i = 0; i < 5; i++) {  
      for (let j = 0; j < 5; j++) {  
        pola += (mulai + j);
      }
      pola += "\n";  
      mulai++; 
    }
    
    return pola;
  }
  
  console.log(polapola());