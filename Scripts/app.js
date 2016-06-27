/**
 * FileName: app.js
 * 
 * @author Kevin Ma
 * @date June 8, 2016
 * 
 * StudentID: 300867968
 * website: comp125-s2016-lesson5.azurewebsites.net
 * @description This file is the main javascript file for the website
 */

(function () {
    "use strict";

    var firstName
    var lastName
    var email
    var contactNumber
    var yourMessage

    /**
     * This function uses the document.title to switch javascript function
     * when the page switches.
     * 
     * @function PageSwitcher
     * @returns {void}
     */
    function PageSwitcher() {
        switch (document.title) {
            case "Home":
                Home();
                break;
            case "About Me":
                About();
                break;
            case "Contact Me":
                Contact();
                break;
            case "Projects":
                Projects();
                break;
        }
    }

    /**
     * This function injects some text into the first paragraph of a page
     * based on it's document.title property
     * 
     * @function InitialText
     * @returns {void} 
     */
    function InitialText() {
        var paragraph = document.getElementsByTagName('p')[0];

        paragraph.textContent = "This is my first paragraph on the " + document.title + " page.";
    }

    /**
     * This function provides JavaScript code for the Home page
     * 
     * @function Home
     * @returns {void}
     */
    function Home() {
        InitialText();

        var parentElement = document.querySelector('div.row')

        var firstParagraph = document.querySelector('div.row p')

        var secondParagraph = document.createElement('p')

        parentElement.insertBefore(secondParagraph, firstParagraph)

        secondParagraph.textContent = 'secondParagraph'
    }

    /**
     * This function provides JavaScript code for the Home page
     * 
     * @function About
     * @returns {void}
     */
    function About() {
        InitialText();

        window.setTimeout(function () {
            alert('hello world after 3 seconds')
        }, 3000)

        var timer = 0;

        var myTimer = window.setInterval(function () {
            timer++;
            console.log(timer)
            if (timer > 10) {
                console.log('we should stop now')
                clearInterval(myTimer)
            }
        }, 1000)
    }

    /**
     * This function provides JavaScript code for the Contact page
     * 
     * @function Contact
     * @returns {void}
     */
    function Contact() {
        // create a reference for your form
        var contactForm = document.getElementById('contactForm')

        firstName = document.getElementById('firstName')
        lastName = document.getElementById('lastName')
        email = document.getElementById('email')
        yourMessage = document.getElementById('yourMessage')
        contactNumber = document.getElementById('contactNumber')

        contactForm.addEventListener('submit', onFormSubmit)

    }

    /**
     * This function provides JavaScript code for the Projects page
     * 
     * @function Projects
     * @returns {void}
     */
    function Projects() {
        InitialText();

    }

    // CALLBACK (EVENT HANDLER) functions +++++++++++++++++++++++++++++++

    /**
     * callback / event handler for the contactForm submit event
     * 
     * @method onFormSubmit
     * @returns {void}
     */
    var onFormSubmit = function (event) {
        console.info('entered onFormSubmit function')

        // stop the form from clearing and trying to submit
        event.preventDefault()

        // display the form values to the console
        displayFormValues()

        // resets the form
        contactForm.reset()
    }
    /**
     * displays form values
     * 
     * @method displayFormValues
     * @returns {void}
     */
    function displayFormValues() {
        var column = document.getElementById('column')
        var formValues = document.createElement('div')
        formValues.setAttribute('id', 'formValues')
        var formValuesString = ''
        formValuesString += 'First Name: ' + firstName.value + '<br>'
        formValuesString += 'Last Name: ' + lastName.value + '<br>'
        formValuesString += 'Email: ' + email.value + '<br>'
        formValuesString += 'Contact Number: ' + contactNumber.value + '<br>'
        formValuesString += 'Your Message: ' + yourMessage.value

        formValues.innerHTML = formValuesString

        if (document.getElementById('formValues')) {
            var formValuesDiv = document.getElementById('formValues')
            formValuesDiv.innerHTML = formValuesString
        }
        else {
            column.appendChild(formValues)
        }
    }

    window.addEventListener("load", PageSwitcher);

})();