var allButtons = $('#buttons > button');

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (ev) {
        var index = $(ev.currentTarget).index();
        var npx = index * -370;
        $('#images').css({
            transform: 'translateX(' + npx + 'px)'
        });
        n = index;
        activeButton(allButtons.eq(n));
    });
}

var n = 0;
var size = allButtons.length;
var timerId = setTimer();

$('.window').on('mouseenter', function () {
    window.clearInterval(timerId);
});

$('.window').on('mouseleave', function () {
    timerId = setTimer();
});

function setTimer() {
    return setInterval(() = > {
        n++;
    playSlide(n % size);
},
    2000
)
}

function playSlide(index) {
    allButtons.eq(index).trigger('click');
}

function activeButton($button) {
    $button.addClass('red')
        .siblings('.red')
        .removeClass('red');

}