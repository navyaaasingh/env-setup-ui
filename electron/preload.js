const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  version: process.versions.electron,
  platform: process.platform,
  node: process.versions.node,
});
