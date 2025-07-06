const { app, BrowserWindow, Notification } = require('electron');
const path = require('path');
const fs = require('fs');

let popupWindow;
let dashboardWindow;

function createPopup() {
  popupWindow = new BrowserWindow({
    width: 400,
    height: 500,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  popupWindow.loadFile('popup.html');
}

function createDashboard() {
  dashboardWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  dashboardWindow.loadFile('dashboard.html');
}

function schedulePopups() {
  const intervalMinutes = 180;
  setInterval(() => {
    new Notification({ title: 'Check-In', body: 'Time for a quick brain check-in!' }).show();
    createPopup();
  }, intervalMinutes * 60 * 1000);
}

app.whenReady().then(() => {
  createDashboard();
  schedulePopups();
});
