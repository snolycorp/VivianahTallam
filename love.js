$(document).ready(function () {
    $('#showLoveBtn').click(function () {
        var lovePercent = $('#loveInput').val();
        var message = '';

        if (lovePercent > 100) {
            message = 'Your love is out of this world.Though I just saw something the reminded me of you 🤔 but then again everything does 🤪!';
        } else if (lovePercent > 75) {
            message = 'I bet you smell like a field full of roses🌹!';
        } else if (lovePercent > 50) {
            message = 'I was trying to focus today, but you kept sneaking into my thoughts. Care to explain yourself 🤔!';
        } else if (lovePercent > 25) {
            message = 'You like them quite a bit like the stars.I bet your the reason the stars do not shine as bright they are jealous of you 😍🤩!';
        } else if (lovePercent > 0) {
            message = 'You have a budding affection!🤪';
        } else {
            message = 'No love? Are you sure?🥺';
        }

        $('#loveMessage').html('<div class="alert alert-info">' + message + '</div>');
    });
});




/*
$(document).ready(function () {
    $('#postLoveBtn').click(function () {
        var loveText = $('#loveInput').val();
        if (loveText.trim() !== '') {
            var loveNote = $('<div class="love-note"></div>').text(loveText);
            $('#loveNotes').append(loveNote);
            $('#loveInput').val(''); // Clear the input field
        }
    });
});*/
