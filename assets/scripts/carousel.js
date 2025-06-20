$(document).ready(function () {
    var state = 1;
    var maxstate = 4; //When the 4th image is on the left, the 6th is on the right so we can't advance any more

    var prevbtn = $('.card-carousel-prev');
    var nextbtn = $('.card-carousel-next');

    //Page loads without animations on the cards so the effects only play when active cards change
    $('.card-carousel-item').removeClass('no-animate');

    prevbtn.click(function () {
        if (state > 1) {
            state--;

            //Get the current panel
            let item1 = $('.card-carousel-item-1');
            let item2 = $('.card-carousel-item-2');
            let item3 = $('.card-carousel-item-3');

            //Move back 1 in the order. The last item needs to be hidden.
            item1.removeClass('card-carousel-item-1');
            item1.addClass('card-carousel-item-2');

            item2.removeClass('card-carousel-item-2');
            item2.addClass('card-carousel-item-3');

            hideItem(item3);
            item3.removeClass('card-carousel-item-3');

            //Set card-carousel-item-1. If state is 1 then it's #carousel-1, so it should be #carousel-state
            let item4 = $('#carousel-' + state);
            item4.addClass('card-carousel-item-1');
            showItemWithAnimation(item4)

            if (nextbtn.hasClass('disabled')) {
                nextbtn.removeClass('disabled'); //We've now gone backwards so next should be enabled
            }

            if (state == 1) {
                prevbtn.addClass('disabled'); //disable previous button if it's now at minimum state
            }
        }
    });

    nextbtn.click(function () {
        if (state < maxstate) {
            state++;

            //Get the current panel
            let item1 = $('.card-carousel-item-1');
            let item2 = $('.card-carousel-item-2');
            let item3 = $('.card-carousel-item-3');

            //Move forwards 1 in the order. The first item needs to be hidden.
            hideItem(item1);
            item1.removeClass('card-carousel-item-1');

            item2.removeClass('card-carousel-item-2');
            item2.addClass('card-carousel-item-1');

            item3.removeClass('card-carousel-item-3');
            item3.addClass('card-carousel-item-2');

            //Set card-carousel-item-3. If state is 1 then it's #carousel-3, so it should be #carousel-(state+3)
            let item4 = $('#carousel-' + (state + 2));
            item4.addClass('card-carousel-item-3');
            showItemWithAnimation(item4);

            if (prevbtn.hasClass('disabled')) {
                prevbtn.removeClass('disabled'); //We've now gone fowards so previous should be enabled
            }

            if (state == maxstate) {
                nextbtn.addClass('disabled'); //disable next button if it's now at the maximum state
            }
        }
    });

    function hideItem(item) {
        item.addClass('inactive');
        item.addClass('hidden');
    }

    function showItemWithAnimation(item) {
        item.removeClass('hidden');

        setTimeout(() => {
            item.removeClass('inactive');
        }, 20);
    }
});