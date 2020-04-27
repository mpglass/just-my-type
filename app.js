let keysLower = $('#keyboard-lower-container');
let keysUpper = $('#keyboard-upper-container');
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentencesIndex = 0;
let letterIndex = 0;
//index position
let currentSentence = sentences[sentencesIndex];
let currentLetter = currentSentence[letterIndex];
//actual value of letter
$('#sentence').append(currentSentence);
$('#target-letter').append(currentLetter);
let letterValue = currentSentence.charCodeAt(0);
console.log(letterValue);
//console.log(value.keyCode(currentLetter));
//trying to log keyCode of current letter
keysUpper.hide();


$('body').keypress(function (event) {
    $('#' + event.keyCode).toggleClass('highlight')
    if (event.keyCode === currentSentence.charCodeAt(letterIndex)) {
        $('#feedback').append('<div class="glyphicon glyphicon-ok"></div>');
    }
    else {
        $('#feedback').append('<div class="glyphicon glyphicon-remove"></div>');    }
    letterIndex++;
    currentLetter = currentSentence[letterIndex];
    $('#target-letter').text(currentLetter);
    $('#yellow-block').css('margin-left','+=17.5px');




});


$('body').keydown(function (event) {
    if (event.keyCode === 16) {
        keysUpper.show();
        keysLower.hide();
    }
});


$('body').keyup(function (event) {
    if (event.keyCode === 16) {
        keysUpper.hide();
        keysLower.show();
    }
    $('.highlight').removeClass('highlight');
});


//$('#' + event.keyCode).removeClass('highlight');

//input and log what is typed and clear the input field
// $('[type="submit"]').click(function (event) {
//     event.preventDefault();
//     let inputVal = $('[type="text"]').val();
//     console.log(inputVal);
//     $('[type="text"]').val('');
// })

//console.log(name.charCodeAt());
//charCodeAt(index position)

//to make sentences change?
//if current letter is == sentence lenght
//function ++ current sentence
//at end of sentence console log switch

//to check if typed letter is correct?
//if typed letter == charCodeAt(currentletter)
//true == green check
//false == red x
//current letter++