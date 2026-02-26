/* =========================
   APP CORE & SESSION
   👉 Login, Session, Navigation
========================= */

window.onload = () => {
  checkSession();
};

function checkSession() {
  const token = localStorage.getItem('user_token');
  const auth = document.getElementById('auth-section');
  const app = document.getElementById('app-section');

  if (token) {
    auth?.classList.add('hidden');
    app?.classList.remove('hidden');
    showModule('Dashboard');
  } else {
    app?.classList.add('hidden');
    auth?.classList.remove('hidden');
  }
}

async function handleLogin() {
  const email = val('login-email');
  const pass = val('login-password');

  if (!email || !pass) {
    return Swal.fire('Error', 'ईमेल व पासवर्ड आवश्यक!', 'error');
  }

  try {
    const res = await callAPI("login", {
      username: email,
      password: pass
    });

    if (!res.success) {
      return Swal.fire('Error', res.msg, 'error');
    }

    // ✅ Session save
    localStorage.setItem('user_token', res.token);
    localStorage.setItem('user_name', res.name);

    loadMainApp(res.name);

  } catch (e) {
    console.error(e);
    Swal.fire('Error', 'Server Error', 'error');
  }
}

function loadMainApp(name) {
  document.getElementById('auth-section')?.classList.add('hidden');
  document.getElementById('app-section')?.classList.remove('hidden');
  document.getElementById('user-name-display').innerText = name;
  showModule('Dashboard');
}

function confirmLogout() {
  Swal.fire({
    title: 'Logout?',
    showCancelButton: true,
    confirmButtonText: 'हो'
  }).then(r => r.isConfirmed && logout());
}

function logout() {
  localStorage.clear();
  location.reload();
}

/* Module Loader */
function showModule(name) {
  const container = document.getElementById('module-container');
  google.script.run.withSuccessHandler(html => {
    container.innerHTML = html;
    if (name === 'Dashboard') loadDashboardData();
  }).getModuleHTML(name);
}

/* Helper */
function val(id) {
  return document.getElementById(id)?.value.trim() || '';
}