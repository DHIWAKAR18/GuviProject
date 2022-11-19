$("#register").click((e) => {
  e.preventDefault();
  var data = {
    username: $("#username").val(),
    dob: $("#dob").val(),
    gender: $(".gender:checked").val(),
    contact: $("#contact").val(),
    email: $("#email").val(),
    password: $("#password").val(),
    cpassword: $("#cpassword").val(),
  };
  
  if (
    data.username == "" ||
    data.dob == "" ||
    data.gender == "" ||
    data.contact == "" ||
    data.email == "" ||
    data.password == "" ||
    data.cpassword == ""
  ) {
    alert("Please fill all the fields");
  } else if (data.password !== data.cpassword) {
    alert("Passwords don't match...Try again");
  } else {
    $.ajax({
      url: "/Project/php/register.php",
      method: "POST",
      data: data,
      dataType: "json",
      async: true,
        success: function (response) {
          alert(response);
          
      },
    });
  }
});
