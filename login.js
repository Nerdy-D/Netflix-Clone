function validLogin(event) {
    // prevent the default behaviour of the page reloading when user clicks submit
    event.preventDefault();

    console.log(event.target[0].value);
    localStorage.setItem("username", event.target[0].value);
    localStorage.setItem("password", event.target[1].value);
    window.location.href = "./index.html";

}