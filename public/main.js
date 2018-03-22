$(document).ready(function(){
    console.log("script linked")
    $.ajax({
        url: "/apitest",
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
})