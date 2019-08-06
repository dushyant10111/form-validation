document.getElementById('name').addEventListener('blur', ValidateName);
document.getElementById('zip').addEventListener('blur', ValidateZip);
document.getElementById('email').addEventListener('blur', ValidateEmail);document.getElementById('phone').addEventListener('blur', ValidatePhone);

function ValidateName(){
   const name = document.getElementById('name');
   const re = /^[a-zA-Z]{2,10}$/;

   if (!re.test(name.value)) {
         name.classList.add('is-invalid');
   } else{
      name.classList.remove('is-invalid');
   }
}

function ValidateZip(){
      const zip = document.getElementById('zip');
      const re = /^[0-9]{6,6}$/;
   
      if (!re.test(zip.value)) {
            zip.classList.add('is-invalid');
      } else{
         zip.classList.remove('is-invalid');
      } 
}

function ValidateEmail(){
      const email = document.getElementById('email');
   const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
   if (!re.test(email.value)) {
         email.classList.add('is-invalid');
   } else{
      email.classList.remove('is-invalid');
   }
}

function ValidatePhone(){
      const phone = document.getElementById('phone');
   const re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5,10})$/;
   if (!re.test(phone.value)) {
         phone.classList.add('is-invalid');
   } else{
      phone.classList.remove('is-invalid');
   }
}