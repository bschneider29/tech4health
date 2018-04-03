$(document).ready(function(){
    // $('#todo').onclick(function(event){
    //         var commentUser = $(username-comment).val();
    //         var commentText = $(message-comment).val();
    //         //console.log(todoText);
    //         sendMedicalSystemComment(commentText);
    // });

    function sendMedicalSystemComment() {
        var commentUser = $(username-comment).val();
        var commentText = $(message-comment).val();
        if(commentText) {
            $('#Medical-Systems-comment-lists').append('<li><strong>'+ commentUser+'</strong><p>'+ commentText+'</p></li>');

            $('#Medical-Systems-comment-lists').val('');
        };
    };
});