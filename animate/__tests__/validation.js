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
