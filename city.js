$.get("http://ipinfo.io", function (response) {
    var city = response.city;

    $("#city").append("<p id='cityp'>You are in: " + city + "</p>");
    $("#foot").append("<a href='http://en.wikipedia.org/wiki/"+ city +"'"+ ">" +city+ " on Wikipedia</a>");    
}, "jsonp");
    
