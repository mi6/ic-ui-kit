const { exec } = require('child_process');
const waitOn = require('wait-on');
const kill = require('cross-port-killer');

/**
 * This function waits for the performance testing app to be served by the previous command
 * (npx serve) and then run the cypress lighthouse command after.
 * Once the tests are complete, the port 3001 is killed which
 * should prevent the testing from hanging once complete
 */
const main = async () => {
  try {
    await waitOn({ resources: ['http://localhost:3001']});
    await runCypressLighthouse();
  } catch (error) {
    console.error(error);
  } finally {
    await kill.kill(3001);
    console.log('Server stopped');
  }
};
const runCypressLighthouse = () => {
  return new Promise((resolve, reject) => {
    exec(`npm run cypress:performance`, (error, stdout, stderr) => {
      if (error) {
          reject(`Error ${error.message}`)
      }
      if (stderr) {
          console.error(`stderr: ${stderr}`)
      }
      console.log(`stdout ${stdout}`);
      resolve();
    })
  })
};



main();