
// step:1 add click event handler with the submit button.
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit button clicked.');

    // step: 2 get the email address inside the email address field.
    // always remember to use .value to get text from an input field.
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    // step:3 get password
    // 3.a: set ID on the html element
    // 3.b: get the element
    // 3.d: get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);

    // DANGER:  do not verify email password on the client side.
    // verify email & password & check whether valid user or not.
    if(email === 'sontan@baap.com' && password === 'secret'){

        // window.location.href = ''; ব্যবহার করে এক পেইজ থেকে আরেক পেইজে যাওয়া যায়
        window.location.href = 'bank.html';
    }
    else{
        alert('Tui password vole gesos!! toke ami teijjo shontan ghoshona korlam.');
    }
})