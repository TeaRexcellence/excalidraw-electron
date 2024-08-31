# excalidraw-electron - Excalidraw Windows Application
A simple Electron wrapper for Excalidraw.

All credit goes to [Excalidraw](https://github.com/excalidraw/excalidraw), this is just an Electron wrapper for it.

<br>

---
*HELP REQUEST*: If anyone knows a very simple way to direct the Library Asset BTN URL to the actual web url instead of a local url and open it in a new browser window instead, please let me know. U can still download and import assets. The url to the asset library just goes to a local url by default. Didnt see a setting for it. Thnx!

---

<br> 


## For non devs: <a href="https://drive.google.com/drive/folders/1CRelQguguejDq65XUlrIUDET77YKtm59?usp=sharing" target="_blank">.EXE Download</a>

<br>

## For devs:
# NOTICE:
- ## Dark mode enabled by default.
  - To disable it as default. Remove the `theme="dark"` line from the main `App.js` file.
- ## I only enabled SAVE TO DISK option:
  - I disabled all other export options since this is being run as a local app. However u can re-add back default export options by removing the `saveFileToDisk: true,` line from the main `App.js` file.
- ## More options below
  - I have included all known canvas options and other options for the library and modifying the app below in this document.

<br><br> 

# Exporting the app as EXE FILE with Electron:

To export your Excalidraw Electron app into a Windows app, follow these steps:

Make sure you have all the necessary dependencies installed by running the following command in your project directory:
`npm install`

- Build the React app by running the following command:
`npm run build`

This command will create an optimized production build of your React app in the build directory.

- Test the Electron app by running the following command: `npm run electron`

This command will launch the Electron app using the production build.

If everything works as expected, you can proceed to package the app into a Windows executable. Run the following command: `npm run dist`

This command will build the React app and then use electron-builder to package it into a Windows app. The output will be located in the dist directory.

- The dist command is defined in your package.json file as follows:

```json
"scripts": {
  ...
  "dist": "npm run build && npm run electron-pack"
}
```
It first runs the build script to create the production build of your React app, and then runs the electron-pack script to package the app using electron-builder.

- The electron-pack script is defined as:
```json
"scripts": {
  ...
  "electron-pack": "electron-builder -c.extraMetadata.main=build/electron.mjs"
}
```
It uses the electron-builder command with the -c.extraMetadata.main flag to specify the entry point of your Electron app, which is build/electron.mjs after the React app is built.

Once the packaging process is complete, you will find the Windows executable and installer files in the dist directory.

The dist directory will contain subdirectories for different platforms and architectures, such as win-unpacked for the unpacked Windows app and ExcalidrawElectron-1.0.0 Setup.exe for the Windows installer.

You can distribute the installer file (ExcalidrawElectron-1.0.0 Setup.exe) to users for easy installation of your Excalidraw Electron app on Windows.

<br><br> 

# Excalidraw customizations
```jsx
UIOptions={{
  canvasActions: {
    changeViewBackgroundColor: boolean,
    clearCanvas: boolean,
    export: boolean,
    loadScene: boolean,
    saveAsImage: boolean,
    theme: boolean,
    saveToActiveFile: boolean,
  },
  exportDialog: {
    createNewScene: boolean,
    exportBackground: boolean,
    exportEmbedScene: boolean,
    exportscale: boolean,
    exportWithDarkMode: boolean,
  },
  mainMenu: {
    canvasActions: {
      export: boolean,
      saveScene: boolean,
      saveAsImage: boolean,
      clearCanvas: boolean,
      backgroundColorPicker: boolean,
    },
    about: boolean,
    resetScene: boolean,
    help: boolean,
  },
}}
```
## Here's a breakdown of the options:

- `canvasActions`:

  - `changeViewBackgroundColor`: Show/hide the "Change view background color" option.
  - `clearCanvas`: Show/hide the "Clear canvas" option.
  - `export`: Show/hide the "Export" option.
  - `loadScene`: Show/hide the "Load scene" option.
  - `saveAsImage`: Show/hide the "Save as image" option.
  - `theme`: Show/hide the "Theme" option.
  - `saveToActiveFile`: Show/hide the "Save to active file" option.


- `exportDialog`:

  - `createNewScene`: Show/hide the "Create a new scene" option in the export dialog.
  - `exportBackground`: Show/hide the "Export background" option in the export dialog.
  - `exportEmbedScene`: Show/hide the "Export embed scene" option in the export dialog.
  - `exportScale`: Show/hide the "Export scale" option in the export dialog.
  - `exportWithDarkMode`: Show/hide the "Export with dark mode" option in the export dialog.


- `mainMenu`:
  - `canvasActions`:
    - `export`: Show/hide the "Export" option in the main menu.
    - `saveScene`: Show/hide the "Save scene" option in the main menu.
    - `saveAsImage`: Show/hide the "Save as image" option in the main menu.
    - `clearCanvas`: Show/hide the "Clear canvas" option in the main menu.
    - `backgroundColorPicker`: Show/hide the "Background color picker" option in the main menu.
  - `about`: Show/hide the "About" option in the main menu.
  - `resetScene`: Show/hide the "Reset scene" option in the main menu.
  - `help`: Show/hide the "Help" option in the main menu.

## ADDITIONAL OPTIONS:
```jsx
UIOptions={{
  // ...previous options...

  exportDialog: {
    // ...previous options...
    exportType: boolean,
    exportQuality: boolean,
  },

  contextMenu: boolean,

  welcomeScreen: boolean,

  zenModeEnabled: boolean,

  viewModeEnabled: boolean,

  gridModeEnabled: boolean,

  removeDocumentColors: boolean,

  autoSaveEnabled: boolean,

  collaborationLinkEnabled: boolean,

  isCollaborating: boolean,

  collaborators: [{
    id: string,
    username: string,
    avatarUrl: string,
    userState: {
      pointer: {
        x: number,
        y: number,
      },
      selectedElementIds: string[],
    },
  }],
}}
```

### Here's a description of the additional options:

- `exportDialog`:

  - `exportType`: Show/hide the "Export type" option in the export dialog.
  - `exportQuality`: Show/hide the "Export quality" option in the export dialog.


- `contextMenu`: Enable/disable the context menu.
- `welcomeScreen`: Show/hide the welcome screen.
- `zenModeEnabled`: Enable/disable the zen mode.
- `viewModeEnabled`: Enable/disable the view mode.
- `gridModeEnabled`: Enable/disable the grid mode.
- `removeDocumentColors`: Enable/disable the removal of document colors.
- `autoSaveEnabled`: Enable/disable the auto-save feature.
- `collaborationLinkEnabled`: Enable/disable the collaboration link feature.
- `isCollaborating`: Indicate whether collaboration mode is active.
- `collaborators`: An array of collaborator objects, each `containing`:

  - `id`: The unique identifier of the collaborator.
  - `username`: The username of the collaborator.
  - `avatarUrl`: The URL of the collaborator's avatar image.
  - `userState`: The current state of the collaborator including:

    - `pointer`: The coordinates of the collaborator's pointer.
    - `selectedElementIds`: The IDs of the elements selected by the collaborator.

    <br> <br><br>

----
<div id="downloadEXE">

# DOWNLOAD for non-devs:
DOWNLOAD EXE AND/OR INSTALL FILE HERE: https://drive.google.com/drive/folders/1CRelQguguejDq65XUlrIUDET77YKtm59?usp=sharing

</div>
----

