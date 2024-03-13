$(document).ready(function () {
    // Handler for create post form submission
    $("#create-post-form").submit(function (event) {
        event.preventDefault();

        var postData = {
            title: $("#post-title").val(),
            category: $("#post-category").val(),
            content: $("#post-content").val(),
            date: $("#post-date").val()
        };

        var queryString = $.param(postData);
        window.location.href = "Forums.html?" + queryString;
    });
});
