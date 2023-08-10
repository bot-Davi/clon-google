function direccion(form){
    var user, pass

    user = document.getElementById("name").value;
    pass = document.getElementById("passd").value;

    if(user == "fernanda") {
        if (pass == "contrasena123"){
        self.location="banco/user1.html";
        } else {
            alert("error de contraseña");
        }
    } else if  (user == "raymon"){
        if (pass == "senacontra123"){
            self.location="banco/user2.html";
            } else {
                alert("error de contraseña");
            }
    } else if (user == "jhony"){
        if (pass == "pepitoperez123"){
            self.location="banco/user3.html";
            } else {
                alert("error de contraseña");
            }
        
        } else{
            alert("error usuario");
        }
     
 } 
    


 function formula(){
    var num1 = document.getElementById('c1').value;
    var num2 = document.getElementById('cant').value;
   

    if(num1 >= '990'){
        alert('no puedes ingresar mas de 990 pesos');
        return  formula;       
     }
      
    if (num1 == ''){
        num1 = 0;
    }

    if (num2 == ''){
        num2 = 0;  
    
    }
     var sumar = parseInt(num1) + parseInt(num2);
    document.getElementById('c1').value = sumar;   
 }




 function formula3(){
    var num1 = document.getElementById('c1').value;
    var num3 = document.getElementById('cant2').value;
    
    
    if(num1 <= '10') {
        alert ('no puedes sacar mas del monto')
        return  formula3;

    }
    if (num1 == ''){
        num1 = 0;
    }
    if(num3 == ''){
        num3 = 0;
    }
 var restar = parseInt(num1) - parseInt(num3);
    document.getElementById('c1').value = restar; 
}