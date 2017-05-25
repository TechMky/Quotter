function getQuote(){
    $.ajax({
    type: "GET",
    url: "https://api.forismatic.com/api/1.0/?",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    dataType: "jsonp",
    success: function (response) {
        $('a').unbind('click');
        $("#quote").html('<i class="fa fa-quote-left fa-fw" aria-hidden="true"></i>' + response.quoteText + '<i class="fa fa-quote-right fa-fw" aria-hidden="true"></i>');
        if(!(response.quoteAuthor === ""))
        $("#author").text("~ " + response.quoteAuthor + " ~");
        else
        $("#author").text("~~ Anonymous ~");
        $("a").attr("href", "https://twitter.com/intent/tweet?text=" + response.quoteText + "-- " + response.quoteAuthor);
    },
    error: function(){
        $("#quote").html("Connection to server failed. Please check your internet connection and try again.");
        $("#author").text("");
        $('a').bind('click', function(e){
            e.preventDefault();
        });
    }
});
}

$(function(){
    getQuote();
});

$("button").click(function (e) { 
    e.preventDefault();
    getQuote();
});