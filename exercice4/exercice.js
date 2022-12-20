$('div').css({
    "display":"none",
})

$('#fade').click( () => {
    $('div').fadeTo(4000, 0.2)
})