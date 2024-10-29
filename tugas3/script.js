function polapola() {
    let pola = "";
    
    
    for (let i = 1; i <= 4; i++) {
      pola += i;
    }
    pola += "\n";  
  
    
    pola += " ";  

    for (let i = 2; i <= 4; i++) {
      pola += i;
    }
    pola += "\n";  
  
    
    pola += "  ";  
    for (let i = 3; i <= 4; i++) {
      pola += i;
    }
    pola += "\n";  

    pola += "   "; 
    pola += 4;  
  
    return pola;
  }
  
  console.log(polapola());