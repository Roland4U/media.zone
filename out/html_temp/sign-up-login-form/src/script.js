function toggleSignup(){
  document.getElementById("login-toggle").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("login-toggle").style.color="#fff";
  document.getElementById("login-toggle").style.border="none";
  document.getElementById("signup-toggle").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("signup-toggle").style.borderBottom="2px solid #fff";
  document.getElementById("signup-toggle").style.color="#fff";
  document.getElementById("login-form").style.display="none";
  document.getElementById("signup-form").style.display="block";
}
                            
function toggleLogin(){
  document.getElementById("login-toggle").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("login-toggle").style.color="#fff";
  document.getElementById("login-toggle").style.borderBottom="2px solid #fff";
  document.getElementById("signup-toggle").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("signup-toggle").style.color="#fff";
  document.getElementById("signup-toggle").style.border="none";
  document.getElementById("signup-form").style.display="none";
  document.getElementById("login-form").style.display="block";
}