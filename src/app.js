const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  let win = new BrowserWindow({
    width: 1200,
    height: 850
  });

  win.loadFile('index.html');

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
};

app.on('ready', createWindow);
