$(function () {

    const searchbar = $('#searchbar');

    const searchterms = new Map();

    searchterms.set("Spaghetti and Meatballs", "recipe1.htm")
    searchterms.set("Caprese Salad", "recipe2.htm")
    searchterms.set("Pancakes", "recipe3.htm")
    searchterms.set("Caesar Salad", "recipe4.htm")
    searchterms.set("Guacamole", "recipe5.htm")
    searchterms.set("Tomato Soup", "recipe6.htm")

    searchbar.autocomplete({
        source: Array.from(searchterms.keys()),
        select: function (event, ui) {
            const selected = ui.item.value;
            if (searchterms.has(selected)) {
                window.location.href = searchterms.get(selected);
            }
        }
    });

    searchbar.on('keydown', function (e) {
        if (e.which == 13) {
            search();
        }
    });

    $('#searchbutton').click(function() {
        search();
    });

    function search() {
        const value = searchbar.val().toUpperCase();

        for (const key of searchterms.keys()) {
            if (key.toUpperCase() === value) {
                window.location.href = searchterms.get(key);
            }
        }
    }
});