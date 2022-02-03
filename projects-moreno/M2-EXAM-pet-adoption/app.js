var index = 0;

var petImages = [
    "assets/cabans-rabbit.jpg",
    "assets/goldie-fish.jpg",
    "assets/hermione-hedgehog.jpg",
    "assets/jobert-bird.png",
    "assets/panther-dog.jpg",
    "assets/ron-dog.jpg",
    "assets/runner-horse.jpg",
    "assets/sia-cat.jpeg",
    "assets/snickers-snake.jpg",
    "assets/walker-carabao.jpg"
];

var petDetails = [
    "Cabans, 6",
    "Goldie, 2",
    "Hermione, 8",
    "Jobert, 3",
    "Panther, 6",
    "Ron, 2",
    "Runner, 4",
    "Sia, 7",
    "Snickers, 12",
    "Walker, 8",
];


function move() { 
    index = index + 1
    if (index == petImages.length-1) {
        return index = 0;
    }
    if (petImages.length == 0) {
        document.getElementById('get-pet').disabled = true;
        document.getElementById('skip-pet').disabled = true;
    }
    return document.getElementById("petImage").src = petImages[index],
    document.getElementById("petDetail").innerHTML = petDetails[index];;
}

function getPet() {
    var pet = petDetails[index];
    var image = petImages[index];
    var pickedDetails = document.createElement("h1");
    var pickedImg = document.createElement('img');
    var pickedPet = document.createElement("div");
    pickedPet.className = 'picked-container';
    pickedImg.src = image
    pickedImg.width = 70;
    pickedImg.height = 70;
    pickedDetails.innerHTML = pet
    pickedPet.appendChild(pickedImg);
    pickedPet.appendChild(pickedDetails);

    document.getElementById("pickedPets").appendChild(pickedPet);

    console.log("picked pet");
    console.log(petImages.length);
    console.log(index);
    move();
}


function skipPet() {
    console.log("clicked");
    console.log(index);
    console.log(petImages.length);
    move();
}