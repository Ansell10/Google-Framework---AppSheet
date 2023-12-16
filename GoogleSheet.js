const scriptURL = 'https://script.google.com/macros/s/AKfycbzk7WS_5MJ0U6G20afDQv6z9BDjLDCsqTHgfa_w4N8ivFBdWJ8uFHJKOGf-iQCb_t5czA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
