import { app, BrowserWindow, screen } from 'electron';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
}

//Disable security warnings in window console.
delete process.env.ELECTRON_ENABLE_SECURITY_WARNINGS;
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = '1';

const createWindow = async (): Promise<void> => {
    //Load extensions
    if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line import/no-unresolved
        const { default: loadExtensions } = await import('./loadExtensions');
        await loadExtensions();
    }

    // Create the browser window.
    const mainDisplay = screen.getPrimaryDisplay().size;
    const mainWindow = new BrowserWindow({
        height: mainDisplay.height * 0.8,
        width: mainDisplay.width * 0.8,
    });
    // and load the index.html of the app.
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    // Open the DevTools.
    if (process.env.NODE_ENV === 'development')
        mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
