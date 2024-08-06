

let filaColumnas = document.querySelectorAll("div")




for (let index = 0; index < filaColumnas.length; index++) {
    /*if (filaColumnas[index] == "") {
        listaValores.push = filaColumnas[index]
        }*/

    filaColumnas[index].addEventListener("click", function () {


            if (filaColumnas[index].textContent === "") {
                filaColumnas[index].innerHTML= "X"
                
            }
           

       

            let listaValores= []

            for (let index = 0; index < filaColumnas.length; index++) {

            

            if (filaColumnas[index].textContent === "") {

                listaValores.push(index)
                
                }


            }

            let valorAleatorio = Math.floor(Math.random()*listaValores.length)

            console.log(valorAleatorio);
            
            let nuevoValor = listaValores[valorAleatorio]
            console.log(listaValores);
            
            console.log(nuevoValor);
            
            filaColumnas[nuevoValor].innerHTML="0"

            console.log(filaColumnas);
            
           

          
            
            
            

                //listaValores[valorAleatorio].innerHTML= "0"

        
        
        }

            
    
    )
}




















