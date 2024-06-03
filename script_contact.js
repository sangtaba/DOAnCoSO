const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const chu_de = document.getElementById('chu_de');
const gop_y = document.getElementById('gop_y');

// var username_error = document.getElementById('name_error');
// var email_error = document.getElementById('email_error');
// var chu_de_error = document.getElementById('chu_de_error');
// var gop_y_errorr = document.getElementById('gop_y_error');
// var buttom_errorr = document.getElementById('button_error')

form.addEventListener('submit', (e) => {
	// e.preventDefault();
	
	checkInputs();

    if(isformvaild() == true){
        form.submit();
    }else{
        e.preventDefault();
    }
});

function isformvaild(){
    let result = true;
    const inputContainer = form.querySelectorAll('.form-control');
    inputContainer.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const chu_de_Value = chu_de.value.trim();
	const gop_y_Value = gop_y.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(chu_de_Value === '') {
		setErrorFor(chu_de, 'chu_de  cannot be handle');
	} else {
		setSuccessFor(chu_de);
	}
	
	if(gop_y_Value === '') {
		setErrorFor(gop_y, 'gop_y cannot be handle');
	} else{
		setSuccessFor(gop_y);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
