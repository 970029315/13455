$(function() {
    $('#go_zhuce').on('click', function() {
        $('.denglu').hide()
        $('.zhuce').show()
    })
    $('#go_denglu').on('click', function() {
        $('.denglu').show()
        $('.zhuce').hide()
    })
})