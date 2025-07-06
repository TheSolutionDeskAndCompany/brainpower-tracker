const fs = require('fs');
const path = require('path');
const csvPath = path.join(__dirname, 'tracker.csv');

document.getElementById('checkinForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const row = {
    date: new Date().toISOString(),
    focus: form.focus.value,
    energy: form.energy.value,
    mood: form.mood.value,
    tasks: form.tasks.value,
    meth: form.meth.value,
    details: form.details.value,
    trigger: form.trigger.value,
    notes: form.notes.value
  };

  const csvLine = Object.values(row).map(val => `"${val}"`).join(',') + '\n';
  fs.appendFileSync(csvPath, csvLine);
  window.close();
});
