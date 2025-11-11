window.addEventListener("load", function () {

    window.timerFeature = function (element) {
        const listActions = {
            "reload": () => { window.location.reload(true) }
        }
        const action = element.attr('data-action') == "lesser" ? -1 : 1;
        const onEnd = element.attr("data-on-end");

        setInterval(function () {
            let seconds = Number(element.text());
            const new_second = action == -1 ? seconds - 1 : seconds + 1;

            if (new_second <= 0 && action == -1) {
                if (onEnd && listActions.hasOwnProperty(onEnd)) {
                    listActions[onEnd]();
                }
                return false;
            }

            element.text(new_second);
        }, 1000)
    }



    $('.timer').each(function (index, element) {
        element = $(element);
        timerFeature(element);
    });


});