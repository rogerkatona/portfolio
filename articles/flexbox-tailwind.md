---
title: 'Top 4 foundational Flexbox properties (using Tailwind.css)'
type: "articles"
typeOfArticle: "Article"
date: '2021-07-06'
description: 'Learn to use 4 key Flexbox properties.  You will find these properties incredibly useful, and eliminate dependency on legacy CSS hacks like float or inline-block.'
isFeatured: 'true'
imageSourceFeatured: '/image/postGraphic-flexboxTailwind-featured.jpg'
bannerImageSource: '/image/banner-flexbox.jpg'
bannerSMImageSource: '/image/bannerSM-flexbox.jpg'
topic: 'Flexbox | Tailwind | CSS'
alt: 'Top 4 foundational Flexbox properties'
author: 'Roger Katona'
authorDescription: 'UI/UX Designer'
authorImageSource: '/image/author_rogerkatona.png'
ogURL: 'https://www.rogerkatona.com/posts/flexbox-tailwind'
ogType: 'article'
ogImage: 'https://www.rogerkatona.com/image/bannerSM-flexbox.jpg'


---

## The challenge and a bit of history
A difficult aspect of front-end development is to control layout.  Developers have spent countless hours solving this problem.  Early in my front-end development 
career the larger challenge was to have designs work across the different browsers.  IE and Firefox primarily, along with the many non-compatible versions of new releases (thanks Microsoft) created a struggle and the number of development hours spent solving these issues
looked like the Griswold's electric meter during Christmas.  Now stir into the cauldron of "things to solve for" different monitor resolutions, and lastly different devices.  Now it looks less like the Griswold's meter 
and more like my Bosch router spinning at 25K RPM cutting through wood.  Side note.  Using that thing is the stuff of nightmares.  That's enough hullabaloo about the past, let's get on with the here and now.  Flexible Box Layout.  

---

## What is Flexible Box Layout (Flexbox)?
Flexbox is a CSS 3 web layout model.  It was designed with the intention of removing dependencies on CSS hacks like float, table, inline-block.  Prior to flexbox it was time-consuming and complicated 
to have content lay on the page correctly.  Something as simple as having 3 containers lay on a horizontal line of the same width and space between was difficult. This is an example of creating a basic layout with standard CSS methods (the hard way) of aligning elements `float:left` and clearing floats `clear:left`.

![contact form preview](/image/postGraphic-flexboxTailwindA.jpg)

---

## Flexbox: A simplified model
We will focus on understanding 4 very important key flexbox tailwind.css properties.  This is the foundation for building more complex models.  We will discuss these properties by walking through a simple tutorial.  Note: Additional styles are used in the HTML to show the resulting design more clearly.  See the [live code](https://codepen.io/rogerkatona/pen/GRmpeXj) at codepen.  The 4 key flexbox and their corresponding CSS rendered properties we will work with: 

- Flex-row `flex-direction:row`
- Flex-col `flex-direction:col`
- Justify-center `justify-content:center` 
- Items-center `align-items:center`

---

## Step 1
To begin with let's create a web page with 3 rows of content.  As you can see, there is a parent div that contains `flex flex-col`.  

> NOTE: `flex` is always added when using a flex property. It "calls" the browser to use Flexbox.

It seems counter-intuitive to use `flex-col` instead of `flex-row` since we are creating rows of content.  Consider it this way.  We are aligning elements in a single column, versus aligning elements along a single row.  To trigger the layout we are looking for, we add the properties to the parent element.  The properties on the parent element sets the behavior for their direct child elements.  In our case, it will ONLY apply to 
the 3 child elements within the parent element.  In other words, if we have a `<div>` UNDER `<header>` it won't be affected.

![Flexbox 3 row basic example step 1](/image/postGraphic-flexboxTailwindB.jpg)


## Step 2
So far we have built 3 rows of content in a single column.  Now, let's add 3 elements to the content row. To set the position for these 3 new elements we use `flex flex-row` on the parent element. The elements are left aligned by default.  

![Flexbox 3 row basic example step 2](/image/postGraphic-flexboxTailwindC.jpg)


## Step 3
Instead of having our 3 elements left aligned, let's center align.  To do this, let's add `justify-center` to the parent element.  To reinforce what we have learned, notice how controlling the layout of the 3 child elements happen at the parent element.  

![Flexbox 3 row basic example step 3](/image/postGraphic-flexboxTailwindD.jpg)


## Step 4
Lastly, let's use `items-center` to align the 3 elements along the cross axis. This is a new term "cross axis" and an important one.  The cross axis is most definable as the opposite of a main axis, where the main access is the primary alignment based on whether the content is aligned vertically or horizontally.  In this case where we are using
`flex-row` so the main axis is horizontal, and the cross axis is vertical.  If we were using `flex-col`, the main axis would be what?  Correct, the main axis would be vertical, and the cross axis horizontal.

![Flexbox 3 row basic example step 3](/image/postGraphic-flexboxTailwindE.jpg)


## Conclusion
Understanding how these 4 Flexible Box Layout properties work will establish the foundation for understanding how to control layout, and avoid using CSS hacks.  This is the foundation I use for build web pages.  Once you have a solid understanding of these 4 flexbox properties you will soon realize this approach will solve 90% of the layout challenges you face as a front-end developer.  Thanks for reading my post.