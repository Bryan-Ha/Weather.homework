$(document).ready(function(){
    $("#submitWeather").click(function(){
        var city = $("#city").val();
        if(city != ""){
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=fb7a08a625266225cbc53a4583d4addf",
                type: "GET",
                dataType: "jsonp",
                //call back 
                success: function(data){
                    var widget= show(data);
                    $("#show").html(widget);
                    $("#city").val("");
                }
            });

        }else{
            $("#error").html("Please enter a valid City");
        }
    });
});

function show(data){
    return "<h2 style='font-size:40px;font-weight:bold;color:blue'>" + data.name + ", " + data.sys.country +"</h2>"+
    "<h3>Weather: "+ data.weather[0].main +"</h3>" +
    "<h3>Description: <img src='http://openweathermap.org/img/wn/"+data.weather[0].icon+".png'> "+ data.weather[0].description +"</h3>"+
    "<h3>Temperature: "+ data.main.temp +"&deg;F</h3>"+
    "<h3>Pressure: "+ data.main.pressure +"hPa</h3>"+
    "<h3>Humidity: "+ data.main.humidity +"%</h3>"+
    "<h3>Wind Speed: "+ data.wind.speed +"m/s</h3>"+
    "<h3>Wind Direction: "+ data.wind.deg +"&deg;</h3>"; 
};

