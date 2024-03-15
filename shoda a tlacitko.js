// KONTROLA HESLA VE FORMULARI :

function checkPasswords() {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
  
    if (password1 !== password2) {
      alert('Špatné heslo, zkus si vzpomenout :)');
      return false;
    }
  
    return true;
  }

// DARK A LIGHT MODE

document.getElementById("mode-toggle").onclick = function() {
  var body = document.body;
  body.classList.toggle("dark-mode");
  var currentMode = body.classList.contains("dark-mode") ? "Light" : "Dark";
  this.textContent = currentMode;
};





  // IKONKA ZPET NAHORU 


  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 10) {
      document.getElementById("scroll-to-top").style.display = "block";
    } else {
      document.getElementById("scroll-to-top").style.display = "none";
    }
  }
  
  // O KLIKNUTI NA TLACITKO : 
  

  document.getElementById("scroll-to-top").onclick = function() {
    document.body.scrollTop = 4;
    document.documentElement.scrollTop = 4;
  }
  
  // SHODA HESEL VE FORMLULARI 


  document.getElementById('password-form').onsubmit = function() {
    return checkPasswords();
  };