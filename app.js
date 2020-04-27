let keysLower = $('#keyboard-lower-container');
let keysUpper = $('#keyboard-upper-container');
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentencesIndex = 0; 
let letterIndex = 0; 
let currentSentence = sentences[sentencesIndex]
let currentLetter = currentSentence[letterIndex]
let showCurrentSentence = $('[id="sentence"]').append(currentSentence);
let targetLetter = $('[id="target-letter"]').append(currentLetter);

keysUpper.hide();

$('body').keydown(function (event){
    if (event.keyCode == 16) { 
        keysUpper.show();
        keysLower.hide();
    }
    //$('#' + event.keyCode).addClass('highlight');
    console.log(event.keyCode)
})
$('body').keyup(function(event){
    if (event.keyCode ==16) {
        keysUpper.hide();
        keysLower.show();
    }
   // $('#' + event.keyCode).removeClass('highlight');
})

$('body').keypress(function (event){
    $('#' + event.keyCode).addClass('highlight');
    
    //$('#' + event.keyCode).removeClass('highlight');

})

// $('[type="submit"]').click(function (event) {
//     event.preventDefault();
//     let inputVal = $('[type="text"]').val();
//     console.log(inputVal);
//     $('[type="text"]').val('');
// })

//console.log(name.charCodeAt());
//charCodeAt(index position)

//change background color of an id

//might need to add CSS class 'highlight'

//input and log what is typed and clear the input field

// $('body').keyup(function (event) {
//     console.log(event.keyCode);
// });
// $('body').keydown(function (event) {
//     console.log(event.keyCode);
// });
// $('body').keypress(function (event) {
//     console.log(event.keyCode);
// });