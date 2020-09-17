window.addEventListener('DOMContentLoaded', function(){
    const subButton = document.getElementById('submit-button');
    subButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("You have submitted your form.");
    });
})
