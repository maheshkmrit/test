const os = require("os");

const osInGb = (gb = os.freemem()) => {
  const gbb = gb / 8 / 1024;
  const fgbb = gbb / 1024;
  return fgbb + " GB";
};

const sysMemory = osInGb();

console.log(os.hostname());
console.log(os.arch());
console.log(os.cpus().length);
console.log(os.networkInterfaces());
console.log(os.machine());
console.log(os.userInfo());
console.log(sysMemory);
