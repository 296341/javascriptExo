window.addEventListener("load", function () {
    
    let element = document.querySelector("button");


    var paragraph = document.getElementsByTagName("body")[0];
    var para = document.createElement("p");
    var text = document.createTextNode("This is a new paragraph.");
    para.appendChild(text); 
    


    function myFun(){
        let randomcolor= "";
        let allchar="0123456789ABCDEF";
        for(let i=0; i<6; i++){
           randomcolor += allchar[Math.floor(Math.random()*16)];
           paragraph.appendChild(para)
        }
         document.body.style.backgroundColor= "#"+randomcolor;
   
    }




    function myJquery(){

        let randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
        
        $('body').css({
          'background-color' : randomColor,
        });
    
     } 




      element.addEventListener("click", myJquery)
})