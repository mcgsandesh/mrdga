/* =========================
   DASHBOARD
   👉 Stats + Charts
========================= */

let genderChart, districtChart;

function loadDashboardData() {
  google.script.run.withSuccessHandler(data => {
    if (data.error) return console.error(data.error);

    setText('stat-total', data.stats.total);
    setText('stat-approved', data.stats.approved);
    setText('stat-players', data.stats.totalPlayers);

    renderGenderChart(data.gender);
    renderDistrictChart(data.districts);
  }).getAnalysisData({ district: 'All', pincode: 'All', gender: 'All' });
}

function renderGenderChart(g) {
  const ctx = document.getElementById('genderChart').getContext('2d');
  genderChart?.destroy();
  genderChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['पुरुष', 'महिला'],
      datasets: [{ data: [g.men, g.women] }]
    }
  });
}

function renderDistrictChart(d) {
  const ctx = document.getElementById('districtChart').getContext('2d');
  districtChart?.destroy();
  districtChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(d),
      datasets: [{ data: Object.values(d) }]
    }
  });
}

function setText(id, v) {
  const el = document.getElementById(id);
  if (el) el.innerText = v ?? 0;
}