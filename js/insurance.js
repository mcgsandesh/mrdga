/* =========================
   INSURANCE ENTRY
   👉 Search + Entry + Submit
========================= */

let tempResults = [];

/* 🔍 Search old data */
async function loadOldData() {
  const q = val('prefill-search');
  if (q.length < 3) {
    return Swal.fire('Error', 'किमान ३ अक्षरे टाका', 'warning');
  }

  try {
    const res = await callAPI('getOldData', { query: q });

    if (!res.success || !res.data?.length) {
      return Swal.fire('Info', 'डेटा सापडला नाही', 'info');
    }

    tempResults = res.data;
    renderSearchResults(res.data);

  } catch (e) {
    Swal.fire('Error', 'Server error', 'error');
    console.error(e);
  }
}

/* 📋 Render search list */
function renderSearchResults(data) {
  const box = document.getElementById('search-results-list');
  box.innerHTML = '';

  data.forEach((d, i) => {
    const div = document.createElement('div');
    div.className = 'p-2 border-b cursor-pointer hover:bg-gray-100 text-xs';
    div.innerText = d.TEAM_NAME;
    div.onclick = () => verifyAndFill(i);
    box.appendChild(div);
  });
}

/* 🔐 Mobile verification */
async function verifyAndFill(i) {
  const d = tempResults[i];

  const { value: mobile } = await Swal.fire({
    title: 'मोबाईल नंबर तपासणी',
    input: 'number',
    inputPlaceholder: 'नोंदणीकृत मोबाईल नंबर',
    showCancelButton: true
  });

  if (!mobile) return;

  if (
    mobile == d.WHATS_APP_NUMBER ||
    mobile == d.ALTERNATE_WHATS_APP_NUMBER
  ) {
    fillForm(d);
    Swal.fire('Success', 'डेटा pre-fill झाला', 'success');
  } else {
    Swal.fire('Error', 'चुकीचा मोबाईल नंबर', 'error');
  }
}

/* ✍️ Fill form */
function fillForm(d) {
  setVal('f-team', d.TEAM_NAME);
  setVal('f-email', d.EMAIL_ADDRESS);
  setVal('f-wa', d.WHATS_APP_NUMBER);
}

/* 💾 Submit form */
async function submitInsuranceForm() {
  const data = {
    team: val('f-team'),
    email: val('f-email'),
    wa: val('f-wa'),
    updatedBy: localStorage.getItem('user_name') || 'Guest'
  };

  try {
    const res = await callAPI('saveInsuranceEntry', data);

    if (res.success) {
      Swal.fire('Success', 'डेटा सेव्ह झाला', 'success');
      document.getElementById('entryForm').reset();
      document.getElementById('search-results-list').innerHTML = '';
    } else {
      Swal.fire('Error', res.msg || 'Save failed', 'error');
    }

  } catch (e) {
    Swal.fire('Error', 'Server error', 'error');
    console.error(e);
  }
}