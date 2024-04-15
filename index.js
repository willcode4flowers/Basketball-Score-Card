let guestDisplay = document.getElementById("guestDisplay"); 
let scoreDisplay = document.getElementById("scoreDisplay"); 

let homeScore = 0; 
let guestScore = 0; 


function homeOne() {
    scoreDisplay.textContent = homeScore+=1; 
}

function homeTwo() {
    scoreDisplay.textContent = homeScore+=2; 
}


function homeThree() {
    scoreDisplay.textContent = homeScore+=3; 
}

function homeReset() {
    homeScore=0; 
    scoreDisplay.textContent = homeScore; 
    
}


function guestOne() {
    guestDisplay.textContent = guestScore+=1; 
}

function guestTwo() {
    guestDisplay.textContent = guestScore+=2; 
}

function guestThree() {
    guestDisplay.textContent = guestScore+=3; 
}

function guestReset() {
    guestScore=0; 
    guestDisplay.textContent = guestScore;  
}


