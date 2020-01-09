$(document).ready(function () {

    resorts = [
        {
            Resort: "Zermatt",
            ID: 13026,
        }
    ]

    function checkReport() {
        var search = ""
        var selected = $(".browser-default :selected").val()
        console.log(selected)

        for (i = 0; i < resorts.length; i++) {
            if (resorts[i].Resort === selected) {
                search = resorts[i].ID
                console.log(resorts[i].ID)
            }

        }

        var queryURL = "https://api.weatherunlocked.com/api/resortforecast/" + search + "?app_id=6461851d&app_key=4c6ecb1f135f755162b13545e275e1ff"

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {

            console.log(response)
        })
    }


    $("#searchButton").on("click", function () {
        checkReport()
    })


    console.log("Executed")
})
