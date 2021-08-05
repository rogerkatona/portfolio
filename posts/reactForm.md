---
title: 'React Hooks - useState, useEffect, and form validation.'
type: 'articles'
date: '2021-06-24'
description: 'Learn the process of building a simple but very functional form with useState, useEffect, and form validation.'
isFeatured: 'false'
imageSourceFeatured: '/image/banner-crossTraining.jpg'
bannerImageSource: '/image/banner-reactHooks.jpg'
bannerSMImageSource: '/image/bannerSM-reactHooks.jpg'
topic: 'React | NextJS'
author: 'Roger Katona'
authorDescription: 'UI/UX Designer'
authorImageSource: '/image/author_rogerkatona.png'
ogURL: 'https://www.rogerkatona.com/posts/reactForm'
ogType: 'article'
ogImage: 'https://www.rogerkatona.com/image/bannerSM-reactHooks.jpg'

---

## To get started
I built my web application using Next.js framework.  Next.js is a JavaScript framework created by Zeit. It lets you build server-side rendering and static web applications using React. I use Node.js as the server, and tailwind.css for styling.

![contact form preview](/image/postGraphic-reactHooksA.png)

## The challenge
I want basic form functionality.  The UI to change (show error text and highlight input field) if the user didn't enter content in fields that are required and remove the error text and input field 
highlight once the user focuses on the input field.  
- Form validation for "Name" and "Email" fields.
    - If the user didn't enter information in either field, I want to return a UI that communicates this.

## Solution outline
- I set an object called formData
    - This object will be an array that returns the input field name and input value for name, and email.
- For validation, I want to…
    - Check to see if the user has entered their name and email
        - If they haven’t entered a value, then when the "onSubmit" function is called.
            - Alert the user if they didn&apos;t enter
                - Name
                - Email
                - Both Name and Email
            - Don’t submit the Form
        - Otherwise (they have)
            - Submit form
            - Show success notification
    - When the user enters either input field (onFocus) I want to clear the alert for that input field.
        - For example.  If the user clicks in the input field = name
            - The alert will go away for that input field
            - The alert will remain for the other input field

---

## Code (as of June 18, 2021)
- I set up the object formData using useState react hook (When the page renders it resets the variable back to undefined.  
  The only way to update the variable is using the method provided by useState.  In this example, the only way to update formData is with setFormData.)

![Preview ](/image/postGraphic-reactHooksB.png)

- Next, when the user enters a value in the input field
    - Appends to the object
    - Sets the value entered by the user

![Preview ](/image/postGraphic-reactHooksC.png)

- Evaluate if the user entered a value in the input field

![Preview ](/image/postGraphic-reactHooksD.png)

- Event listener to capture if the user entered a value in the input field

![Preview ](/image/postGraphic-reactHooksE.png)

## What works
- The alert shows onSubmit
- The fields clear the input field (onFocus)

## What doesn’t work…
- When name or email fields are populated, onSubmit the form doesn’t know it and returns the alert
    - I think I need to evaluate for either an empty array object or if the user entered a name and cleared the value evaluate if the value is equal to blank