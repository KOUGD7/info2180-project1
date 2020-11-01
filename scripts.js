/* Add your JavaScript to this file */
window.addEventListener("load", addmessage);

function addmessage() {
    const btn = document.querySelector("form .btn");
    btn.addEventListener("click", function(event) {
    event.preventDefault();
    let stat = document.querySelector(".message");
    
    msg = document.querySelector("#email").value;

    if (msg == ""){
        alert("Please enter a valid email address" + msg);
    }
    else{
        stat.textContent = msg;
        alert("Thank You! Your email address " + msg);
    }
    //onsole.log("Nope.");
    });
}