const util = require('util');
const exec = util.promisify(require('child_process').exec);
const PythonShell = require('python-shell');

var pythonOptions = {
  mode: 'text',
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: './',
  args: 'mail'
};

const ourResuest = () => {
  // request code here
}

async function imageCapture() {
  // add command we want to run here:
  const { stdout, stderr } = await exec('ls');
  // const { stdout, stderr } = await exec('fscamera script ...');
  console.log('stdout:', stdout);
  
  // TODO: put code from other file here
  // ourResuest();
}

const runScript = () => PythonShell.run('script.py', pythonOptions, (err, results) => {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});


const intervalFunc = setInterval(() => {
  // console.log('again and again and again');
  imageCapture();
  runScript();
}, 5000);
