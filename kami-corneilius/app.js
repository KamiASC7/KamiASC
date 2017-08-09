
$(document).ready(function(){

$('#nspire').click(function(){
    $.ajax({
        url: 'https://api.forismatic.com/api/1.0/',
        jsonp: 'jsonp',
        dataType: 'jsonp',
        data: {
            method: "getQuote",
            lang: "en",
            format: "jsonp",
        },
        success: function (data) {
            console.log(data);
        }
    });

})

});
