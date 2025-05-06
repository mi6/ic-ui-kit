const { exec } = require('child_process');
const waitOn = require('wait-on');
const kill = require('cross-port-killer');

/**
 * This function waits for the performance testing app to be served
 * and then runs the cypress lighthouse command after.
 * Once the tests are complete, the port 3001 is killed which
 * should prevent the testing from hanging.
 */
const main = async () => {
  try {
    await startServer();
    console.log('Waiting for the server to be available on http://localhost:3001...');
    await waitOn({ resources: ['http://localhost:3001'] });
    console.log('Running Cypress performance tests...');
    await runCypressLighthouse();
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit with a non-zero status code on error
  } finally {
    await kill.kill(3001);
    console.log('Server stopped');
  }
};

const startServer = () => {
  return new Promise((resolve, reject) => {
    const server = exec('npx serve -p 3001 ./dist-perf', (error, stdout, stderr) => {
      if (error) {
        return reject(`Error starting server: ${error.message}`);
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }
      console.log(`stdout: ${stdout}`);
    });

    // Resolve the promise immediately since the server runs in the background
    resolve(server);
  });
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