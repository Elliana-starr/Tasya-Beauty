 
 
 const signInForm = document.getElementById('signIn_form');
 const toggleBtn = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('eyeIcon');
  const eyeSlashIcon = document.getElementById('eyeSlashIcon');

  toggleBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';

    eyeIcon.classList.toggle('hidden', isPassword);
    eyeSlashIcon.classList.toggle('hidden', !isPassword);

    toggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
  });



  signInForm.addEventListener('submit', function(event) {
    event.preventDefault();

     const data = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };

    console.log(data);

  Swal.fire('Success!', 'Sign in successful.', 'success');

  });
  //JSON FETCH ASYNCHRONOUS AND ASYNC
