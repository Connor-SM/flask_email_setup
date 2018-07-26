$(function() {
    $('#submit').click(function() {
        $.ajax({
            url: '/handle_data',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                let keys = Object.keys(response);
                for (let i = 0; i < keys.length; i++) {
                  sessionStorage.setItem(keys[i], response[`${keys[i]}`]);
                }
                window.location.href = "/display_data";
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});
