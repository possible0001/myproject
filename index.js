                let usernameformat= /^[a-zA-Z0-9]+$/;
                let emailformat= /^\w+@[a-z]+\.[a-z]{2,3}$/;
                let ageformat = /^[0-9]+$/;
                let passwordformat=  /^[a-zA-Z0-9]+$/;

                let usernameinput= document.getElementById('username').value;
                let ussernamererror= document.getElementById('usernameError');
                let emailinput= document.getElementById('email').value;
                let emailerror= document.getElementById('emailError');
                let passwordinput = document.getElementById('password').value;
                let passworderror= document.getElementById('passwordError');
                let confirminput= document.getElementById('confirmPassword').value;
                let confirmerror= document.getElementById('confirmPasswordError');
                let checking=true;

                function validateusername(){
                  if(usernameinput==''){
                    ussernamererror.innerText="Username cannot be empty";
                    document.getElementById('username').focus()
                    checking=false;
                  }else if(!(usernameinput.match(usernameformat))){
                    ussernamererror.innerText="invalid username";
                    document.getElementById('username').focus()
                    checking=false;
                }else{
                  ussernamererror.innerHTML="<span style='color:green'>valid username</span>";
                  document.getElementById('email').focus()
                  
                }
              }



                function validateemail(){
                  if(emailinput==''){
                    emailerror.innerText="provide your email please";
                    document.getElementById('email').focus()
                    checking=false;
                  }else if(!(emailinput.match(emailformat))){
                    emailerror.innerText="invalid email";
                    document.getElementById('email').focus()
                    checking=false;
                }else{
                  emailerror.innerHTML="<span style='color:green'>valid email</span>";
                  document.getElementById('password').focus()
                  
                }
                  
                }


                function validatepassword(){
                  console.log(passwordinput);
                   if(passwordinput===""){
                    passworderror.innerText="you must provide password";
                    document.getElementById('password').focus()
                    checking=false;
                  }else if(!(passwordinput.match(passwordformat))){
                    passworderror.innerText="your password must contain uppercase,lowercase,digit and btw 6 and 15 characters";
                    document.getElementById('password').focus()
                    checking=false;
                }else{
                  passworderror.innerHTML="<span style='color:green'>valid password</span>";
                  document.getElementById('confirmPassword').focus()
                  
                }
                  
                }