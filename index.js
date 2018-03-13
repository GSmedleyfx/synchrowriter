const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const path = require('path')
const url = require('url')

function createWindow()
{
    win = new BrowserWindow({width: 800, height: 600});

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      }));

      const connectionMenuTemplate = [
          {
              label:"Connect",
              submenu:[
                    {
                        label:"Host",
                        click (item, focusedWindow) {
                            console.log(focusedWindow);
                            
                            //focusedWindow.hostServer();
                        }
                    },
                    {
                        label:"Connect",
                        click (item, focusedWindow) {
                            focusedWindow.activateSynchronization();
                        }

                    }
              ]
            },
            {
                label: 'View',
                submenu: [
                    {role: 'reload'},
                    {role: 'forcereload'},
                    {role: 'toggledevtools'}
                ]
            }
      ];

      const menu = Menu.buildFromTemplate(connectionMenuTemplate);
      Menu.setApplicationMenu(menu);
}

app.on('ready', createWindow);