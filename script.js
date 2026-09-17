
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

