const {
  app,
  BrowserWindow,
  Tray,
  Menu,
  WebContents,
  webFrame,
  Notification,
  ipcRenderer
} = require("electron");
// const electron-titlebar = require('electron-titlebar')
const path = require("path");
const nativeImage = require("electron").nativeImage;

// let appIcon = nativeImage.createFromPath(
//   path.join(__dirname, "123.png")
// );
function createWindow() {
  // const pre = new BrowserWindow({
    // width: 500,
    // height: 300,
    // webPreferences: {
      //   nodeIntegration: true
      // },
      
      // Создаем окно браузера.
      // const appIcon = new Tray("123.png");

      const main = new BrowserWindow({
        width: 412,
        height: 412,
        minHeight: 412,
        minWidth: 412,
        maxHeight: 412,
        maxWidth: 412,
        icon: "css.ico",
        frame: false,
        thickFrame: false,
        // opacity: 0.9,
        // titleBarStyle: "customButtonsOnHover",
        transparent: true,
        resizable: false,
        skipTaskbar: true,
        vibrancy: 'window',
        webPreferences: {
          nodeIntegration: true,
          nativeWindowOpen: true
        },
        show: false,
      });
      
      
      const win = new BrowserWindow({
        // width: 800,
        // height: 600,
        'minHeight': 600,
        'minWidth': 600,
        // icon: "css.ico",
        // frame: false,
        // thickFrame: false,
        // opacity: 0.9,
        titleBarStyle: "customButtonsOnHover",
        // transparent: true,
        // resizable: false,
        // transparent: true,
        // backgroundColor: '##80FFFFFF',
        tabbingIdentifier: 'new-window-for-tab',
        // vibrancy: 'menu',
        webPreferences: {
          nodeIntegration: true,
          nativeWindowOpen: true,
          webviewTag: true,
          zoomFactor: 1.0
        },
        show: false
      });

      const v_player = new BrowserWindow({
        width: 412,
        height: 412,
        minHeight: 412,
        minWidth: 412,
        // maxHeight: 412,
        // maxWidth: 412,
        icon: "css.ico",
        // frame: false,
        // thickFrame: false,
        // opacity: 0.9,
        // titleBarStyle: "customButtonsOnHover",
        transparent: false,
        resizable: true,
        // skipTaskbar: true,
        // vibrancy: "window",
        webPreferences: {
          nodeIntegration: true,
          nativeWindowOpen: true,
        },
        show: false,
      });
      


      // app.("app/manage.py runserver")
      win.loadURL("http://127.0.0.1:8000/");
      // win.loadURL("https://www.youtube.com/tv#");
      
      main.loadURL(`file://${__dirname}/web/load.html`);
      v_player.loadURL(
        `file://${__dirname}/html_temp/playerjs.html?file=https://cdn1.kinogo.by/movies/acbf6d33e0ddaef8f69073954c5449fc5ed62c1b/b3bdceadfe0cf5173e939c5af16f3391:2020042215/360.mp4`
      );
      main.once('ready-to-show', () => {
        main.webContents.setLayoutZoomLevelLimits(1, 1);
        main.webContents.setZoomLevel(0.0);
        // win.loadURL(`file://${__dirname}/web/load.html`);
        main.show()
        // v_player.show()
        // win.webContents.setVisualZoomLevelLimits(0.1);        
        // win.setProgressBar(0.5)
});
        win.once('ready-to-show', () => {
        win.webContents.setLayoutZoomLevelLimits(1, 1);
        win.webContents.setZoomLevel(0.0);
        setTimeout(() => {win.show(); main.close(); win.focus()}, 6000);
        // setTimeout(() =>  20000);
        
        // main.close()
        // let myNotification = new Notification("Title", "Lorem Ipsum Dolor Sit Amet");
        
       });
       
       

  // and load the index.html of the app.
  // win.loadFile("web/index.html");

  

  // Отображаем средства разработчика.
//   win.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Некоторые API могут использоваться только после возникновения этого события.

app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  app.quit();
});
// app.on('ready', onReady)

// function onReady() {

    
//     if(!app.isDefaultProtocolClient('arq')) {
//         app.setAsDefaultProtocolClient("arq", 'C:\\Users\\Roland);

//     }
// }

// Quit when all windows are closed.
// app.on("window-all-closed", () => {
//   // Для приложений и строки меню в macOS является обычным делом оставаться
//   // активными до тех пор, пока пользователь не выйдет окончательно используя Cmd + Q
//   app.quit();
//   if (process.platform !== "darwin") {
//   }
// });
// 
// app.on("activate", () => {
//   // На MacOS обычно пересоздают окно в приложении,
//   // после того, как на иконку в доке нажали и других открытых окон нету.
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });

// In this file you can include the rest of your app's specific main process
// code. Можно также поместить их в отдельные файлы и применить к ним require.
