const buttom = document.getElementById("clicar");

buttom.addEventListener("click", comparar);



function comparar() {
  
  const primeiraSequenciaDna = document.getElementById("inputDna").value;
  const segundaSequenciaDna = document.getElementById("inputDna2").value;

  const primeiroDnaArr = primeiraSequenciaDna.split("")
  const segundaDnaArr = segundaSequenciaDna.split("")


    let comparacao_DNA = 0;
        
      for (let index = 0; index < primeiroDnaArr.length; index += 1){
          if(primeiroDnaArr[index] === segundaDnaArr[index]){
            comparacao_DNA += 1; 
          } 
          
        }

        document.getElementById("resultado_da_operacao").innerHTML = ("Existe  ") + comparacao_DNA + " bases nucleotídicas iguais"
        
        return [comparacao_DNA];
    }
    