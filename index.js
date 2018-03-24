const path = require('path');
const url = require('url')

const { app, BrowserWindow } = require('electron');

app.commandLine.appendSwitch(
    'widevine-cdm-path',
    path.join(__dirname, './bin/widevinecdmadapter.plugin')
);
app.commandLine.appendSwitch(
    'widevine-cdm-version',
    '1.4.8.984'
);

const createWindow = () => {
    const win = new BrowserWindow({width: 800, height: 600})
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
        webPreferences: {
            plugins: true,
            partition: 'persist:fenetre',
            devTools: true
        }
    }));

    win.webContents.openDevTools({
        mode: 'undocked'
    });
};

app.on('ready', createWindow);
