function handleSignUp(event) {

    // Get the value of password and repeat password fields
    document.getElementById("sign_up_form").addEventListener("submit", e => {
    let Password = document.getElementById("password").value;
    let RepeatPassword = document.getElementById("repeat-password").value;

    // validate
    if (Password!=RepeatPassword) {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Passwords not matching';
      e.preventDefault();
      }

    });

}






