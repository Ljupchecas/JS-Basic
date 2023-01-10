$(document).ready(function(){

    let button = $('#btn').first();
    let text = $('#inputText').first();
    let color = $('#inputColor').first();

    button.on('click', function(){
        
        if(!text.val()){
            $('#secondH3').first().html(`ERROR - Type text !`);
        } else {
            $('#secondH3').first().html(`${text.val()}`).css('color', color.val());
        }
        
    })

})