let encender;
let contador =0;
let  apagado=true;

let ponerRojo = ()=>{
    let cont=0;
  
    let rojo= setInterval(function(){
               document.getElementById("rojo").style.backgroundColor="rgba(255,0,0,1)";
                document.getElementById("verde").style.display="none";
                document.getElementById("rojo").style.display="block";
                document.getElementById("azul").style.display="none";
                document.getElementById("negro").style.display="none";
                cont++;
                if(cont==1){
                     clearInterval(rojo);      
                }
    },44)
}
let ponerVerde = ()=>{
    let cont=0;
   
    let verde= setInterval(function(){
               document.getElementById("verde").style.backgroundColor="rgba(0,255,0,1)";
               document.getElementById("verde").style.display="block";
               document.getElementById("rojo").style.display="none";
               document.getElementById("azul").style.display="none";
               document.getElementById("negro").style.display="none";
               cont++;
               if(cont==1){
                 clearInterval(verde);             
               }
    },33)
}
let ponerAzul = ()=>{
    let cont=0;
 
    let azul= setInterval(function(){
               document.getElementById("azul").style.backgroundColor="rgba(0,0,255,1)";
               document.getElementById("verde").style.display="none";
                document.getElementById("rojo").style.display="none";
                document.getElementById("azul").style.display="block";
                document.getElementById("negro").style.display="none";         
                cont++;
                if(cont==1){
                  clearInterval(azul);         
                }
    },33)
}
let ponerNegro= ()=>{
    let cont=0;
 
   let negro= setInterval(function(){
                document.getElementById("negro").style.backgroundColor="#1c2833";
               document.getElementById("negro").style.display="block";
               document.getElementById("verde").style.display="none";
               document.getElementById("rojo").style.display="none";
               document.getElementById("azul").style.display="none";          
                cont++;
                if(cont==1){
                   clearInterval(negro);        
                }
    },555)
}


let hacerLaLuz = (contad) =>{
    apagado=false;
    encender = setInterval(function (){
        
          for ( let i =1;i<=4;i++){
                
              if(i ===1){
              ponerRojo();          
              }
             if(i ===2){
               ponerVerde();
              }
             if(i ===3){
                ponerAzul();
              }
             if(i ===4){
                ponerNegro();
              }  
              contador++;
              if(contador ===30000){    
                        document.getElementById("boton").value ="HACER LA LUZ";
                        contador=0;
                        clearInterval(encender);
                }   
          }
         document.getElementById("contador").innerHTML=contador; 
       },-999999)
};

let apagarLaLuz = () =>{
      
    if(!apagado){
             document.getElementById("boton").value ="HACER LA LUZ";
             ponerNegro();
             clearInterval(encender);
             apagado = true;         

    }else{
              document.getElementById("boton").value ="APAGAR LA LUZ";
             hacerLaLuz(contador);
             apagado = false;
    }
}

window.onload  =() =>{
document.getElementById("boton").addEventListener("click",apagarLaLuz,false);
}