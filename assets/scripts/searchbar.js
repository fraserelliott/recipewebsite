$(function () {

    var searchbar = $('#searchbar');

    var searchterms = new Map();

    searchterms.set("Spaghetti and Meatballs", "recipe1.htm")
    searchterms.set("Caprese Salad", "recipe2.htm")
    searchterms.set("Pancakes", "recipe3.htm")
    searchterms.set("Caesar Salad", "recipe4.htm")
    searchterms.set("Guacamole", "recipe5.htm")
    searchterms.set("Tomato Soup", "recipe6.htm")

    var availableTags = [
        "Spaghetti and Meatballs",
        "Caprese Salad",
        "Pancakes",
        "Caesar Salad",
        "Guacamole",
        "Tomato Soup"
    ]

    searchbar.autocomplete({
        source: Array.from(searchterms.keys()),
        select: function (event, ui) {
            var selected = ui.item.value;
            if (searchterms.has(selected)) {
                window.location.href = searchterms.get(selected);
            }
        }
    });

    searchbar.keypress(function (e) {
        if (e.which == 13) {
            let value = searchbar.val().toUpperCase();

            for (let key of searchterms.keys()) {
                if (key.toUpperCase() === value) {
                    window.location.href = searchterms.get(key);
                }
            }
        }
    });
});