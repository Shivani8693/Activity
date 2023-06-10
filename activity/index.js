

function valid() {
    var email = document.getElementById('email').value;
    var password=document.getElementById('Password').value;
    var e =document.getElementById('email-err-message')
    var p = document.getElementById('password-err-message')
    console.log(email)
    
    if(email == '' && password  =='xyz123'){
        e.innerHTML ='please fill the email';
        e.style.visibility = 'visible';
        
    }
    else if (email == '' && password  ==''){
        e.innerHTML ='please fill the email';
        p.innerHTML ='please fill the password';
        e.style.visibility = 'visible';
        p.style.visibility = 'visible';     
    }
    
    else if(email == 'shivani@gmail.com' && password  ==''){
        p.innerHTML ='please fill the password';
        p.style.visibility = 'visible';

    }
    else if(email == 'shivani@gmail.com' && password  =='xyz123'){
        document.getElementById("demo").innerHTML =
        window.location.assign("x.html");
    }

    else if(email == 'shivani@gmail.com' && password !=='xyz123') {
        p.innerHTML ='please check the passwod';
        p.style.visibility = 'visible';
       
    }else if(email !== 'shivani@gmail.com' && password =='xyz123'){
        e.innerHTML =' please check the email';
        e.style.visibility = 'visible';
        
    }
    else if(email !== 'shivani@gmail.com' && password !=='xyz123'){
        e.innerHTML ='Please enter correct email';
        p.innerHTML ='Please enter correct Password';
        e.style.visibility = 'visible';
        p.style.visibility = 'visible';
        
    }
   



}

