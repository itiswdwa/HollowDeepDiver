const { app, BrowserWindow, protocol, net } = require('electron')
const path = require('node:path');
const exec = require('child_process').exec;
const FitAddon = require("@xterm/addon-fit").FitAddon

function execute(cmd) {
    exec(cmd, function(error, stdout, stderr) {
        if(error){
            console.error(error);
        }
        else{
            console.log("success");
        }
    });
}

execute("start fs " + __dirname);

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        fullscreen: true,
        webPreferences: {
            sadbox: false,
            webSecurity: false,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html');
    win.webContents.openDevTools()
}

app.whenReady().then(() => {
    protocol.handle('atom', (request, callback) => {
        const url = request.url.substr(7)
        console.log('file://' + decodeURI(path.normalize(url)));
        return net.fetch('file://' + decodeURI(path.normalize(url)));
    });
    createWindow()

    app.on('window-all-closed', () => {
        execute("taskkill /F /IM fs.exe");
        app.quit()
    })  
})

