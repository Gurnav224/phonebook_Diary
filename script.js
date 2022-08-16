//put Dom Elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector("#name");
const MobileInput = document.querySelector("#number");
const msg = document.querySelector('.msg');
const userList = document.querySelector("#users");

myForm.addEventListener('submit',onSubmit);



function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value ==='' || MobileInput.value === ''){
       // alert('Please enter all the fields')
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove  error after 3 seconds

        setTimeout(() => msg.remove(), 3000 );
    }
    else {
        // create  new list item with user 
        //alert("sucess")
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${MobileInput.value}`));

        userList.appendChild(li);
console.log(userList);
        nameInput.value = '';
        MobileInput.value = '';
    }

}