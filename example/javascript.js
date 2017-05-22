function validation() {
  // first name validation
  if(/^[A-Za-z\s]+$/.test(registration.firstname.value)) {
    return (true);
  }else {
    alert("Please enter a valid name");
    return (false);
  }

// last name validation
  if(/^[A-Za-z\s]+$/.test(registration.lastname.value)) {
    return (true);
  }else {
    alert("Please enter a valid name");
    return (false);

  // birthday validation
  if(/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/.test(registration.birthday.value)) {
    return (true);
  }else {
    alert("PLease enter a valid date of birth");
    return (false);
  }

  // regular expression to get valid email
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    .test(registration.email.value)) {
    return (true);
  }else {
    alert("Please enter a valid email address");
    return (false);
  }

  // password checker
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("password2").value;
    if (password !=confirmPassword) {
      alert("Password do not match.");
      return false;
    } else {
      return true;
    }
  }
}

// FORGOT PASSWORD
function forgotPassword() {
  
}

// LINKS
// Does not work on IE or Chrome atm due to unable to load XMLHttpRequest
// Cross origin requests are only supported for protocol schemes: http, data,
// chrome, chrome-extension, https
  function loadHome() {
  var file = "home.html";
  // needs to load new home.html instead of index.html because styling moves
  var elmnt = document.getElementById("contents");
   if (file) {
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         elmnt.innerHTML = this.responseText;
       }
     };
    xhttp.open("GET", file, true);
    xhttp.send();
    return;
     }
   }

function loadSearch() {
var file = "search.html";
var elmnt = document.getElementById("contents");
 if (file) {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       elmnt.innerHTML = this.responseText;
     }
   };
  xhttp.open("GET", file, true);
  xhttp.send();
  return;
   }
 }

function loadRegister() {
var file = "register.html";
var elmnt = document.getElementById("contents");
 if (file) {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       elmnt.innerHTML = this.responseText;
     }
   };
  xhttp.open("GET", file, true);
  xhttp.send();
  return;
   }
 }

 function loadLogin() {
 var file = "login.html";
 var elmnt = document.getElementById("contents");
  if (file) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        elmnt.innerHTML = this.responseText;
      }
    };
   xhttp.open("GET", file, true);
   xhttp.send();
   return;
    }

 function loadReferences() {
 var file = "references.html";
 var elmnt = document.getElementById("contents");
  if (file) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        elmnt.innerHTML = this.responseText;
      }
    };
   xhttp.open("GET", file, true);
   xhttp.send();
   return;
    }
  }

// SLIDESHOW
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slideshow");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 4 seconds
}

// FOOTER
function lastModified() {
   document.write(document.lastModified);
}
