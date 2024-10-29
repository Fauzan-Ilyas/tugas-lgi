function polapola() {
    let pola = "";
    
    
    for (let i = 1; i <= 5; i++) {
      pola += i;
    }
    pola += "\n"; 
  
    
    for (let i = 6; i <= 10; i++) {
      pola += i;
    }
    pola += "\n";  

    
    for (let i = 9; i >= 5; i--) {
      pola += i;
    }
    pola += "\n";  
  
    
    for (let i = 4; i >= 0; i--) {
      pola += i;
    }
  
    return pola;
  }
  
  console.log(polapola());