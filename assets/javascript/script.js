$(document).ready(function () {

    resorts = [
        {
            Resort: "Zermatt",
            ID: 13026,
            lat: 46.0207,
            lng: 7.7491,
        }
    ]


    function checkReports() {
        var search = ""
        var selected = $(".browser-default :selected").val()

        for (i = 0; i < resorts.length; i++) {
            if (resorts[i].Resort === selected) {
                search = resorts[i].ID
                console.log(resorts[i].ID)
            }
        }

        var forecastURL = "https://api.weatherunlocked.com/api/resortforecast/" + search + "?app_id=6461851d&app_key=4c6ecb1f135f755162b13545e275e1ff"
        var snowURL = "https://api.weatherunlocked.com/api/snowreport/" + search + "?app_id=6461851d&app_key=4c6ecb1f135f755162b13545e275e1ff"

        $.ajax({
            url: forecastURL,
            method: "GET",
        }).then(function (response) {
            console.log(response)
            updateforecastCards(response)
        })

        $.ajax({
            url: snowURL,
            method: "GET",
        }).then(function (response) {

            console.log(response)
            updatesnowCards(response)
        })
    }

    function updateforecastCards(response) {


        forecast = response.forecast[4]
        $("#data5").text(forecast.base.wx_desc)
        $("#data6").text(forecast.base.temp_f)
        $("#data7").text(forecast.base.windspd_mph)
        $("#weatherIcon").attr("src", "assets/images/PNG/" + forecast.base.wx_icon.replace(".gif", ".png"));
        $("#data6").text(forecast.base.temp_f + " °F")
        $("#data7").text(forecast.base.windspd_mph + " mph")

    }

    function updatesnowCards(response) {
        $("#data2").text(response.lastsnow_in + " in")
        $("#data3").text(response.lowersnow_in + " in")
        $("#data4").text(response.uppersnow_in + " in")
        $("#data1").text(response.conditions)

    }


    $("#searchButton").on("click", function () {
        checkReports();
        $(".hide").attr("class", "")
        $("#shouldISki").animate({ fontSize: "30px" });
        $("#shouldISki").animate({ marginTop: "-=120px" });


        console.log("Executed")
    });

    // Initialize and add the map
    function initMap() {
        // The location of Zermatt
        var Zermatt = { lat: 46.0207, lng: 7.7491 };
        // The map, centered at Zermatt
        var map = new google.maps.Map(
            document.getElementById('map'), { zoom: 4, center: Zermatt });
        // The marker, positioned at Zermatt
        var marker = new google.maps.Marker({ position: Zermatt, map: map });

        var settings = {
            "url": "https://maps.googleapis.com/maps/api/js?key=AIzaSyDWnarAnM5iU1S8bdpK_7FGu6ChEXMe7tY&callback=initMap",
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }


})

