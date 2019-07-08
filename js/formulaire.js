(function() {
    'use strict';
    window.addEventListener('load', () => {
      // Get the forms we want to add validation styles to
      let forms = document.getElementsByClassName('needs-validation');
      
      // Loop over them and prevent submission
      let validation = Array.prototype.filter.call(forms, (form) => {
        form.addEventListener('submit', (event) => {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
  
  /*
  $(document).ready(() => {
    let envoi = document.getElementById('envoie');


  })*/
  