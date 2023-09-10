
$('img').on('mouseenter', function(){$(this).css('border', '5px solid red')})
// $('img').on('mouseleave', function(){$(this).css('border', 'none')})
// $('img').on('click', function(){$(this).css('border', 'none')})
$( "img" ).on( "click", function() {
    // $(this).fadeOut( "slow" );
    $(this).animate({
        opacity: 0,
        width: '50px',

    }, 3000)
  });

$('#add-input').on('click', function () {
$('form').append('<input type="text"/>');
})

///////////////Event Delegation ////////////////

// $('input').on('focus', function(){ 
//     $(this).val('Bamboozled')
// })

$('form').on('focus','input', function(){
    $(this).val('Bamboozled')
})