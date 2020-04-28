let keysLower = $('#keyboard-lower-container');
let keysUpper = $('#keyboard-upper-container');
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentencesIndex = 0;
let letterIndex = 0;
let totalWords = 54
let currentSentence = sentences[sentencesIndex];
let currentLetter = currentSentence[letterIndex];
let mistakes = 0;
let startTime = Date.now()


$('#sentence').append(currentSentence);
$('#target-letter').append(currentLetter);

keysUpper.hide();


$('body').keypress(function (event) {
    $('#' + event.keyCode).toggleClass('highlight')
    if (event.keyCode === currentSentence.charCodeAt(letterIndex)) {
        $('#feedback').append('<div class="glyphicon glyphicon-ok"></div>');
    }
    else {
        $('#feedback').append('<div class="glyphicon glyphicon-remove"></div>');
        mistakes++;
    }
    letterIndex++;
    currentLetter = currentSentence[letterIndex];
    $('#target-letter').text(currentLetter);
    $('#yellow-block').css('margin-left', '+=17.5px');

    if (letterIndex === currentSentence.length) {
        sentencesIndex++;
        if (sentencesIndex === sentences.length) {
            $('body').off();
            let endTime = Date.now();
            let minutes = ((endTime - startTime) / 60000);
            let Wpm = Math.floor(totalWords / minutes - 2 * mistakes)
            $('.glyphicon').remove();
            let results = ('Congrats! You typed ' + (Wpm) + ' words per minute.')
            $('#feedback').append(results)
            $('#feedback').append('<button class="btn btn-info">Play Again</button>')
            $('.btn').on();
            $('.btn').click(function () {
                location.reload();
            })
            return;
        }
        currentSentence = sentences[sentencesIndex];
        $('#sentence').text(currentSentence);
        letterIndex = 0;
        currentLetter = currentSentence[letterIndex];
        $('#target-letter').text(currentLetter);
        $('#yellow-block').css('margin-left', '0')
        $('.glyphicon').remove();
    };
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