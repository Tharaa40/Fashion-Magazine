// document.getElementsByClassName("overlay").addEventListener("click", myFunction);

function redirectAlert() {
  alert ("Redirecting you to www.healthyreceipes.com");
}




function Subscribe() //subscription alert in the footer
{
    const form = document.getElementsByClassName("text-field");

    var identity = document.getElementById('identity').value
    var mail = document.getElementById('mail').value

    if (!identity || !mail) {
        alert("Please fill up the form");
    } else {
        alert('Welcome to the GlaMe family!');

    }
}
