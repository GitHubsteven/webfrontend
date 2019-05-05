const ora = require('ora');

let spinner = ora('loading unicorns').start();

setTimeout(() => {
  spinner.color = 'red';
  spinner.text = 'loading rainbows'
}, 1000);