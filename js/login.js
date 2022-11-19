// const error = $("#error");
$("input").keydown(() => {
  // error.removeAttr("data-show");
});

// ? EventListeners
$("#signin").click((e) => {
  console.log("hi")
  e.preventDefault();
  const email = $("#email").val();
  const password = $("#password").val();
  if (email === "" || email.length < 3) {
    // error.attr("data-show", "true");
    // error.html("Enter valid email");

    return;
  }
  if (password === "" || password.length < 2 || password.length > 13) {
    // error.attr("data-show", "true");
    // error.html("Enter valid password");
    return;
  }
  const userData = {
    email: email,
    password: password,
  };
  console.table(userData)
  $.ajax({
    method: "post",
    url: "/Project/php/login.php",
    data: userData,
    dataType: "json",
    async: true,
    success: function (response) {
      if (response.status) {
        if (localStorage.getItem("uid")) localStorage.removeItem("uid");
        localStorage.setItem("uid", JSON.stringify(response.uid));
        window.location.href = "../Project/profile.html";
      } else {  
        // error.attr("data-show", "true");
        // $("#error").html(response.msg);
      }
    },
  });
});
