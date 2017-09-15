let chokidar = require('chokidar');
let projectPath = require('/Users/josesandate/Desktop/node-social-monitor/node-social-monitor');
let watcher = chokidar
   .watch('projectPath', { ignored: /(^|[\/\\])\../,
     persistent: true
   });

let log = console.log.bind(console);

watcher
  .on('add', path => log(`File ${newFile} has been added`))
  .on('change', path => log(`File ${path} has been changed`))
  .on('unlink', path => log(`File ${path} has been removed`));
