$(function() {
    $('#submit').click(function() {
        $.ajax({
            url: '/handle_data',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response);
                // Store
                sessionStorage.setItem("text", response);
                window.location.href = "/display_data";
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});
