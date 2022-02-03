var userSelection = '';

var getQuote = document.getElementById('getQuotee');

var steve = document.getElementById("Jobs");
var king = document.getElementById("King");
var shakespeare = document.getElementById("Shakespeare");
var winfrey = document.getElementById("Winfrey");
var einstein = document.getElementById("Einstein");



function jobsSelected(){
    if (userSelection != 'steve'){
        
        king.style.borderColor='white';
        shakespeare.style.borderColor='white';
        winfrey.style.borderColor='white';
        einstein.style.borderColor='white';

    }
    return userSelection = 'steve',
    getQuote.disabled=false,
    getQuote.style.borderColor ='white',
    document.getElementById("Jobs").style.borderColor="blue",
    console.log('Jobs Selected');

}

function kingSelected(){

    if (userSelection != 'king'){
        

        steve.style.borderColor ='white';
        shakespeare.style.borderColor='white';
        winfrey.style.borderColor='white';
        einstein.style.borderColor='white';

    }
    
    return userSelection='king',
    getQuote.disabled=false,
    getQuote.style.borderColor ='white',
    document.getElementById("King").style.borderColor="blue",
    console.log('King Selected');

}

function shakespeareSelected(){

    if (userSelection != 'shakespeare'){
        steve.style.borderColor='white';
        king.style.borderColor='white';
        winfrey.style.borderColor='white';
        einstein.style.borderColor='white';


    }
    return userSelection='shakespeare',
    getQuote.disabled=false,
    getQuote.style.borderColor ='white',
    document.getElementById("Shakespeare").style.borderColor="blue",
    console.log('Shakespeare Selected');

}

function winfreySelected(){

    if (userSelection != 'winfrey'){

        steve.style.borderColor='white';
        king.style.borderColor='white';
        shakespeare.style.borderColor='white';
        einstein.style.borderColor='white';
    }
    return userSelection='winfrey',
    getQuote.disabled=false,
    getQuote.style.borderColor ='white',
    document.getElementById("Winfrey").style.borderColor="blue",
    console.log('Winfrey Selected');

}

function einsteinSelected(){
    if (userSelection != 'einstein'){
        steve.style.borderColor='white';
        king.style.borderColor='white';
        winfrey.style.borderColor='white';
        shakespeare.style.borderColor='white';
    }

    getQuote.disabled=false,
    getQuote.style.borderColor ='white'
    document.getElementById("Einstein").style.borderColor="blue",
    console.log('Einstein Selected');

}



var jobQuotes = [
    "\"Great things in business are never done by one person. They're done by a team of people\"",
	"\"I want to put a ding in the universe\"",
	"\"Stay hungry, stay foolish\"",
	"\"It's not a faith in technology. It's faith in people\"",
    "\"We made the buttons on the screen look so good you'll want to lick them\""

]

var kingQuotes = [
    
    "\"Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work\"",
    "\"Monsters are real, and ghosts are real too. They live inside us, and sometimes, they win\"",
    "\"The trust of the innocent is the liar's most useful tool\"",
    "\"Life is like a wheel. Sooner or later, it always come around to where you started again\"",
    "\"We make up horrors to help us cope with the real ones\""

]

var shakespearQuotes = [
    
    "\"Wisely, and slow. They stumble that run fast\"",
    "\"To be, or not to be, that is the question\"",
    "\"It is not in the stars to hold our destiny but in ourselves\"",
    "\"Love all, trust a few, do wrong to none\"",
    "\"A fool thinks himself to be wise, but a wise man knows himself to be a fool\""


]

var winfreyQuotes = [
    
    "\"The more you praise and celebrate your life, the more there is in life to celebrate\"",
	"\"Surround yourself with only people who are going to lift you higher\"",
	"\"The biggest adventure you can take is to live the life of your dreams\"",
	"\"You become what you believe, not what you think or what you want\"",
	"\"Every day, you're only as good as your last show\""


]



var einsteinQuotes = [
    "\"Insanity: doing the same thing over and over again and expecting different results\"",
    "\"The only thing that interferes with my learning is my education\"",
    "\"I have no special talent. I am only passionately curious\"",
    "\"Try not to become a man of success but rather to become a man of value\"",
    "\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe\""


]


function quoteGetter() {
    var random = Math.floor(Math.random() * 5);
    if (userSelection == 'steve') {
        document.getElementById('quoteDisplay').innerHTML = jobQuotes[random];
    }
    else if (userSelection == 'king') {
        document.getElementById('quoteDisplay').innerHTML = kingQuotes[random];
    }
    else if (userSelection == 'shakespeare') {
        document.getElementById('quoteDisplay').innerHTML = shakespearQuotes[random];
    }
    else if (userSelection == 'winfrey') {
        document.getElementById('quoteDisplay').innerHTML = winfreyQuotes[random];
    }
    else {
        document.getElementById('quoteDisplay').innerHTML = einsteinQuotes[random];
    }


}