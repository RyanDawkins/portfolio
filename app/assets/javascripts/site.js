$(document).ready(function(e){

    // For some reason page is scrolling to bottom, will fix later.
    window.scrollTo(0, 0);
});

$(document).on('click', '.nav-link', function(e){

    // Changes what is considered 'active'
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
});

$(document).on('click', 'a.scroll', function(e){

    // Fixes flickering
    e.preventDefault();

    // Scrolls to that option
    var href = $(this).attr("href");
    if(href.charAt(0) === '#') {
        $('html,body').animate({scrollTop: $(href).offset().top},'slow');
    } else {
        window.location.href = href;
    }
});

$('#input-phone').formatter({
    'pattern': '({{999}}) {{999}}-{{9999}}',
    'persistent': true
});

$(document).on('submit', '#contact-form', function(event){

    var first_name = $("#input-first-name").val();
    var last_name = $("#input-last-name").val();
    var email = $("#input-email").val();
    var phone = $("#input-phone").val();

    $.ajax({
        type: "POST",
        url: "/contact/create.json",
        contentType: "application/json",
        data: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone
        }),
        dataType: 'json',
        async: false,
        success: function(data){
            $("#contact-success").show("slow");
        },
        error: function(data){
            $("#contact-error").show("slow");
            console.log(data);
        }
    }).done(function(event){
        setTimeout(function(){
            $(".alert").hide("slow");
        }, 5000);
    });

    return false;
});
