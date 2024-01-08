const signInButton = document.querySelector("#signInButton");
const signUpButton = document.querySelector('#signUpButton');
const overlay_container = document.querySelector('.container .overlay-container');
const overlay = document.querySelector('.container .overlay-container .overlay');
const signInForm = document.querySelector('.container .sign-in-form');
const signUpForm = document.querySelector('.container .sign-up-form');
const overlay_left = document.querySelector('.container .overlay-container .overlay-left')
const overlay_right = document.querySelector('.container .overlay-container .overlay-right')

//code for making the change in the sign in and sign up 
signInButton.addEventListener('click',() => {
    overlay_container.style.transform = 'translateX(100%)';
    overlay.style.transform = 'translateX(-50%)';
    signInForm.classList.add('active');
    signUpForm.classList.remove('active');
    overlay_left.classList.add('active')
    overlay_right.classList.remove('active')

} );


signUpButton.addEventListener('click',() => {
    overlay_container.style.transform = 'translateX(0%)';
    overlay.style.transform = 'translateX(0%)';
    signUpForm.classList.add('active');
    signInForm.classList.remove('active');
    overlay_right.classList.add('active')
    overlay_left.classList.remove('active')
} )

