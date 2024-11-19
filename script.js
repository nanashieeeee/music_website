//Card 1 Variables
const clipA = document.getElementById("xmasVid");
const cardA = document.getElementById("card1");
const cardTitleA = document.getElementById("card1H");

//Card 2 Variables
const clipB = document.getElementById("perfectVid");
const cardB = document.getElementById("card2");
const cardTitleB = document.getElementById("card2H");

//Card 3 Variables
const clipC = document.getElementById("ooVid");
const cardC = document.getElementById("card3");
const cardTitleC = document.getElementById("card3H");


//Card 1 Functions
cardA.addEventListener("mouseover", function(){
    cardTitleA.style.display = "none"
    clipA.style.display = "block";
    clipA.play();
});
cardA.addEventListener("mouseout", function(){
    clipA.pause();
    clipA.currentTime = 0;
    clipA.style.display = "none";
    cardTitleA.style.display = "block";
});

//Card 2 Functions
cardB.addEventListener("mouseover", function(){
    cardTitleB.style.display = "none"
    clipB.style.display = "block";
    clipB.play();
});
cardB.addEventListener("mouseout", function(){
    clipB.pause();
    clipB.currentTime = 0;
    clipB.style.display = "none";
    cardTitleB.style.display = "block";
});

//Card 3 Functions
cardC.addEventListener("mouseover", function(){
    cardTitleC.style.display = "none"
    clipC.style.display = "block";
    clipC.play();
});
cardC.addEventListener("mouseout", function(){
    clipC.pause();
    clipC.currentTime = 0;
    clipC.style.display = "none";
    cardTitleC.style.display = "block";
});

//Socials Button Click Function
function openLink(url) {
    window.open(url, '_blank');
}

//About Button (in header) function
function scrollToAbout(divId){
    let targetDiv = document.getElementById("aboutMe");
    if(targetDiv){
        targetDiv.scrollIntoView({behavior: 'smooth'});
    }
}
