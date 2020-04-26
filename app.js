let keysLower = $('#keyboard-lower-container');
let keysUpper = $('#keyboard-upper-container');

keysUpper.hide();
$('body').keydown(function (){
if (event.keyCode == 16) { 
    keysUpper.show();
    keysLower.hide();
}
})
$('body').keyup(function(){
    if (event.keyCode ==16) {
        keysUpper.hide();
        keysLower.show();
    }
})

$('body').keyup(function (event) {
    console.log(event.keyCode);
});
$('body').keydown(function (event) {
    console.log(event.keyCode);
});
$('body').keypress(function (event) {
    console.log(event.keyCode);
});

