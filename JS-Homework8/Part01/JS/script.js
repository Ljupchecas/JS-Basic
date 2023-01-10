$(document).ready(function(){

    let button = $('#btnName').first();
    let input = $('#inputName').first();

    button.on('click', function(){
        $('#secondH1').first().html(`Hello there ${input.val()} !`)
    })

    
})