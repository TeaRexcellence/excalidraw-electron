import React from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import "@excalidraw/excalidraw/index.css";
import './App.css';

function App() {
  return (
    <div className="full-screen">
      <Excalidraw
        theme="dark"
        UIOptions={{
          canvasActions: {
            saveFileToDisk: true,
          },
        }}
      />
    </div>
  );
}

export default App;