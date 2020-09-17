/*const request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if(this.status === 200) {
        console.log(this);
    }
};

request.open("GET", "./sample.txt");
request.send();

fetch('./sample.txt').then(function(response) {
    console.log(response);
});
*/
window.addEventListener('DOMContentLoaded', function(){

    const dogButton = document.getElementById('dogbutton');
    
    //Appends a random dog photo when button clicked, does button style
    dogButton.addEventListener('click', function() {
        dogButton.textContent = "Loading Doggo..."
    
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response) {return response.json(); })
        .then(function(data){
    
            const dogpic = document.getElementById('dog');
            dogpic.setAttribute('src', data.message);

            dogButton.textContent = "Generate Another Doggo?";
        });
    });
    
    const breedMenu = document.getElementById('breedlist');
    var addstring = '';
    //Fetches dog breed list from API
    
    breedMenu.addEventListener('click', function() {
        fetch('https://dog.ceo/api/breeds/list')
        .then(function(response) {return response.json(); })
        .then(function(data){
            for(let x=0; x<data.message.length; x++) {
              addstring += `<option value="${data.message[x]}">${data.message[x]}</option>`
            }
            breedMenu.innerHTML = breedMenu + addstring;
        })
    });
    breedMenu.addEventListener('change', function() {
        breedChoice = this.value; 
        fetch(`https://dog.ceo/api/breed/${breedChoice}/images/random`)
        .then(function(response){return response.json(); })
        .then(function(data){
            
            const doggopic = document.getElementById('dog');
            doggopic.setAttribute('src', data.message);
            
        })
    })
});