$(document).ready(function () {

    function checkReport() {

        search = ""
        url = ""
        queryURL = "" + search

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response)
        })
    }

    checkReport()
})



// TASKS FOR MVP (MINIMUM VIABLE PRODUCT):
// function for getting the input from the search box and making API call
// On click that triggers the API search function
// function that hides and shows appropiate HTML elements via changing CSS classes
// function that dynamically changes the Weather / Snow Report info boxes
// function that allows users to go back to search again