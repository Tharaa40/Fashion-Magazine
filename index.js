//To show popup
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

window.onload = function () {
    $(document).ready(function () {
        $('#popup').css({
            'display': 'block'
        });

        $('#close').click(function () {
            $('#popup').css({
                'display': 'none'
            });
        });
    });
}


//Subscription alert in the footer
function Subscribe() 
{
    const form = document.getElementsByClassName("text-field");

    var identity = document.getElementById('identity').value
    var mail = document.getElementById('mail').value

    if (!identity || !mail) {
        alert("Please fill up the form"); //if either one or both of the fields are not filled up
    } else {
        alert('Welcome to the GlaMe family!'); //when both of the fields are filled up
    }
}






