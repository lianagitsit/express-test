$(document).ready(function(){
    console.log("script linked")
    $.ajax({
        url: "/apitest",
        method: "GET"
    }).then(function (response) {
        console.log(typeof response);
        console.log(JSON.parse(response));
    });

    $.ajax({
        url: "/counter",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#counter").text(response.counter)
    });
})