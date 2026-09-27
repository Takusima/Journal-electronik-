const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("journalApp", {
  version: "0.1.0"
});