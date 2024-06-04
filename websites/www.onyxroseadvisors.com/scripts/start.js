const upath = require('upath');
const { exec } = require('child_process');

const browserSyncPath = upath.resolve(upath.dirname(__filename), '../node_modules/.bin/browser-sync');


exec(`"${browserSyncPath}" --reload-delay 2000 --reload-debounce 2000 public -w --no-online`, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
});
