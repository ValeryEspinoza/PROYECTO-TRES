

let filaColumnas = document.querySelectorAll("div")




for (let index = 0; index < filaColumnas.length; index++) {

    if (filaColumnas[index] == "") {
    listaValores.innerHTML= filaColumnas[index]
    }

    filaColumnas[index].addEventListener("click", function () {


        
            filaColumnas[index].innerHTML= "X"

       

            let listaValores= []

            for (let index = 0; index < filaColumnas.length; index++) {

            

               if (filaColumnas[index].textContent === "") {

                listaValores.push(filaColumnas[index])
                }
            }

                let valorAleatorio=Math.floor(Math.random()*9)
                listaValores[valorAleatorio].innerHTML= "0"


                console.log(valorAleatorio);
                console.log(listaValores)

        


            
           /* if (filaColumnas[valoAleatorio].textContent == "") {
                
            filaColumnas[valoAleatorio].innerHTML= "0"
            }
            //else{
               /* for (let index = 0; index < filaColumnas.length; index++) {
                if (filaColumnas[valoAleatorio].textContent == "") {
                    filaColumnas[valoAleatorio].innerHTML= "0"
                } 
                }

            }*/
        
        
        
        }

            
    
    )
}




















