const fs = require('fs');
const path = require('path');
const csvPath = path.join(__dirname, 'tracker.csv');

const data = fs.readFileSync(csvPath, 'utf-8').split('\n').filter(line => line);
const parsed = data.map(line => line.split(',').map(v => v.replace(/"/g, '')));
const labels = parsed.map(r => new Date(r[0]).toLocaleDateString());
const focus = parsed.map(r => parseInt(r[1]));

const ctx = document.getElementById('focusChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels,
    datasets: [{
      label: 'Focus Over Time',
      data: focus,
      borderWidth: 2
    }]
  },
  options: { scales: { y: { beginAtZero: true, max: 10 } } }
});
