// Check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
// Click on X to delete
}).on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function (event) {
    if (event.which === 13) {
        if ($(this).val() !== "") {
            var todoText = $(this).val();
            $(this).val("");
            $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>");
        }
    }
});

$(".fa-plus-square").on("click", function () {
   $("input[type='text']").slideToggle();
});