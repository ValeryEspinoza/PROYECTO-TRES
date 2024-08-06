

let filaColumnas = document.querySelectorAll("div")

for (let index = 0; index < filaColumnas.length; index++) {


    filaColumnas[index].addEventListener("click", function () {


        
            filaColumnas[index].innerHTML= "X"

            let valoAleatorio=Math.floor(Math.random()*9)
            console.log(valoAleatorio);

             filaColumnas[valoAleatorio].innerHTML= "0"
           
            for (let index = 0; index < filaColumnas.length; index++) {
                if (filaColumnas[valoAleatorio].textContent == " ") {
                
                filaColumnas[valoAleatorio].innerHTML="0"

            }else{
                for (let index = 0; index < filaColumnas.length; index++) {
                    if (filaColumnas[valoAleatorio].textContent == " ") {
                    
                    filaColumnas[valoAleatorio].innerHTML="0"
            }}
        }}

           
          
            
        
           
        
            
    })

}




















