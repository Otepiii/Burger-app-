$(document).on("click", ".burger-button", function (){
    var burgerId = $(this).val()
    var devoured = $(this).attr("devoured")
    console.log(devoured);

    $.ajax({
        url:`/api/burgers/${burgerId}/${devoured}`,
        method:"PUT"
    }).then(function(status){
        console.log(status);
    });

    location.reload();
});

$(".add-burger").on("click", function (){
    var burgerName = $("#burger").val().trim();
    console.log(burgerName);
    $.ajax({
        url:`/api/burgers/${burgerName}`,
        method:"POST"
    }).then(function(status){
        console.log(status);
    });

})