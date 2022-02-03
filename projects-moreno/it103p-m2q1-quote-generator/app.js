var chosenPerson = '';
var getQuotebtn = document.getElementById('get-quote');
var personBruce = document.getElementById('bruce');
var personCharlie = document.getElementById('charlie');
var personMartin = document.getElementById('martin');
var personStan = document.getElementById('stan');
var personMark = document.getElementById('mark');


var bruceQuotes = [
    'Mistakes are always forgivable, if one has the courage to admit them.',
    'Absorb what is useful, discard what is not, add what is uniquely your own.',
    'A wise man can learn more from a foolish question than a fool can learn from a wise answer.',
    'The possession of anything begins in the mind.',
    'Knowledge will give you power, but character respect.'
]

var charlieQuotes = [
    'Life is a beautiful magnificent thing, even to a jellyfish.',
    "You'll never find a rainbow if you're looking down",
    'I always like walking in the rain, so no one can see me crying.',
    'Nothing is permanent in this wicked world, not even our troubles.',
    "My pain may be the reason for somebody's laugh. But my laugh must never be the reason for somebody's pain."
]

var martinQuotes = [
    'The time is always right to do what is right.',
    'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
    'Injustice anywhere is a threat to justice everywhere.',
    'Our lives begin to end the day we become silent about things that matter.',
    'I have decided to stick with love. Hate is too great a burden to bear.'
]

var stanQuotes = [
    "I've been the luckiest man in the world because I've had friends, and to have the right friends is everything: people you can depend on, people who tell you the truth if you ask something.",
    "I don't have inspiration. I only have ideas. Ideas and deadlines.",
    'The only advice anybody can give is if you want to be a writer, keep writing. And read all you can, read everything.',
    'Life is never completely without challenges.',
    "Luck's a revolving door, you just need to know when it's your time to walk through."
]

var markQuotes = [
    "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
    "The question I ask myself like almost every day is, 'Am I doing the most important thing I could be doing?'",
    "I think a simple rule of business is, if you do the things that are easier first, then you can actually make a lot of progress.",
    "The biggest risk is not taking any risk.",
    "I think a simple rule of business is, if you do the things that are easier first, then you can actually make a lot of progress."
]

function chooseBruce() {
    if (chosenPerson != 'bruce') {
        personCharlie.style.borderColor = '#686195';
        personMartin.style.borderColor = '#686195';
        personStan.style.borderColor = '#686195';
        personMark.style.borderColor = '#686195';
    }
    return chosenPerson = 'bruce',
        getQuotebtn.disabled = false,
        getQuotebtn.style.borderColor = '#c85515',
        document.getElementById("bruce").style.borderColor = "red",
        console.log('bruce selected'),
        console.log(chosenPerson);
}

function chooseCharlie() {
    if (chosenPerson != 'charlie') {
        personBruce.style.borderColor = '#686195';
        personMartin.style.borderColor = '#686195';
        personStan.style.borderColor = '#686195';
        personMark.style.borderColor = '#686195';
    }
    return chosenPerson = 'charlie',
        getQuotebtn.disabled = false,
        getQuotebtn.style.borderColor = '#c85515',
        document.getElementById("charlie").style.borderColor = "red",
        console.log('charlie selected'),
        console.log(chosenPerson);
}

function chooseMartin() {
    if (chosenPerson != 'martin') {
        personBruce.style.borderColor = '#686195';
        personCharlie.style.borderColor = '#686195';
        personStan.style.borderColor = '#686195';
        personMark.style.borderColor = '#686195';
    }
    return chosenPerson = 'martin',
        getQuotebtn.disabled = false,
        getQuotebtn.style.borderColor = '#c85515',
        document.getElementById("martin").style.borderColor = "red",
        console.log('martin selected'),
        console.log(chosenPerson);
}

function chooseStan() {
    if (chosenPerson != 'stan') {
        personBruce.style.borderColor = '#686195';
        personCharlie.style.borderColor = '#686195';
        personMartin.style.borderColor = '#686195';
        personMark.style.borderColor = '#686195';
    }
    return chosenPerson = 'stan',
        getQuotebtn.disabled = false,
        getQuotebtn.style.borderColor = '#c85515',
        document.getElementById("stan").style.borderColor = "red",
        console.log('stan selected'),
        console.log(chosenPerson);
}

function chooseMark() {
    if (chosenPerson != 'mark') {
        personBruce.style.borderColor = '#686195';
        personCharlie.style.borderColor = '#686195';
        personMartin.style.borderColor = '#686195';
        personStan.style.borderColor = '#686195';
    }
    return chosenPerson = 'mark',
        getQuotebtn.disabled = false,
        getQuotebtn.style.borderColor = '#c85515',
        document.getElementById("mark").style.borderColor = "red",
        console.log('mark selected'),
        console.log(chosenPerson);
}

function displayQuote() {
    var random = Math.floor(Math.random() * (bruceQuotes.length));
    if (chosenPerson == 'bruce') {
        document.getElementById('display-quote').innerHTML = bruceQuotes[random];
    }
    else if (chosenPerson == 'charlie') {
        document.getElementById('display-quote').innerHTML = charlieQuotes[random];
    }
    else if (chosenPerson == 'martin') {
        document.getElementById('display-quote').innerHTML = martinQuotes[random];
    }
    else if (chosenPerson == 'stan') {
        document.getElementById('display-quote').innerHTML = stanQuotes[random];
    }
    else {
        document.getElementById('display-quote').innerHTML = markQuotes[random];
    }

}