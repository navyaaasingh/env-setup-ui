const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
  send: (channel, data) => {
    const allowedChannels = ['agent:start', 'agent:stop', 'agent:approve']
    if (allowedChannels.includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  },
  on: (channel, callback) => {
    const allowedChannels = ['agent:update', 'agent:complete', 'agent:error']
    if (allowedChannels.includes(channel)) {
      ipcRenderer.on(channel, (_event, ...args) => callback(...args))
    }
  },
  removeAllListeners: (channel) => {
    ipcRenderer.removeAllListeners(channel)
  },
})
