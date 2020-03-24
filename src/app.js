const { app, BrowserWindow } = require('electron')
const loadDevtool = require('electron-load-devtool')

const createWindow = () => {
  let win = new BrowserWindow({
    width: 1280,
    height: 800,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('dist/index.html')
  loadDevtool(loadDevtool.REACT_DEVELOPER_TOOLS)
  loadDevtool(loadDevtool.REDUX_DEVTOOLS)

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
