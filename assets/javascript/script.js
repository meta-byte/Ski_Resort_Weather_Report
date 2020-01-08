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

// TASKS FOR MVP (MINIMUM VIABLE PRODUCT):
// function for getting the input from the search box and making API call
// On click that triggers the API search function
// function that hides and shows appropiate HTML elements via changing CSS classes
// function that dynamically changes the Weather / Snow Report info boxes
// function that allows users to go back to search again