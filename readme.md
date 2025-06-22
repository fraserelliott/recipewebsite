# Fraser's Recipes

## What is this?

This was made for an assignment to use bootstrap and jquery as part of a responsive website. I started off by making my own carousel as I wanted one with overlapping bootstrap cards, which I achived by using a css grid. This worked very well on larger devices, but on mobile I wanted to change it to a single card per carousel-item. I therefore changed my design to have 2 carousels - 1 that shows with a class desktop-display and 1 that shows with a class mobile-display, with media queries controlling when each are active.

There are loads of bootstrap utility classes used for layout, colour, shadows, etc. I've done a lot of restyling by changing variables and overwriting some things that can't be done with variables.

There are a few bootstrap components used here:
- Navbar
- Card
- Carousel
- Modal (for the contact page)

Additionally, I have used the jquery autocomplete widget for the search bar. I wrote a script for this that checks for either an enter, selecting an option from the autocomplete, or a search button click (only visible in mobile-display), and takes you to the recipe selected.