// function to get form data
function handleGetFormData() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const city = document.getElementById('city').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked;
  return { name, email, city, zipCode, status };
}

// function to check if input is number
function isNumber(input) {
  return !isNaN(input);
}

// function to check if checkbox is checked
function checkboxIsChecked() {
  return document.getElementById('status').checked;
}

// function to validate form data
function validateFormData(data) {
  if (data !== null && isNumber(data.zipCode) && checkboxIsChecked()) {
    return true;
  }
  return false;
}

// // function to submit form data
// function submitForm(event) {
//   event.preventDefault();
//   const formData = handleGetFormData();
//   const isValid = validateFormData(formData);
//   const warningDiv = document.getElementById('warning');
//   if (!isValid) {
//     warningDiv.textContent = 'Periksa form anda sekali lagi';
//   } else {
//     warningDiv.textContent = 'Terima kasih';
//     // do something with the form data
//   }
// }

function submit(event) {
  event.preventDefault();
  if (validateFormData(handleGetFormData()) == false) {
    return (document.getElementById('warning').innerHTML = 'Periksa form anda sekali lagi!');
  } else {
    return (document.getElementById('success').innerHTML = 'Terima kasih telah mengikuti kami :)');
  }
}

// add event listener to the form
const form = document.getElementById('my-form');
form.addEventListener('submit', submit);
