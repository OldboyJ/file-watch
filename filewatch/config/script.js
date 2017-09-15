let chokidar = require('chokidar');
let projectPath = require('/Users/josesandate/Desktop/node-social-monitor/node-social-monitor');
let watcher = chokidar
   .watch('projectPath', { ignored: /(^|[\/\\])\../,
     persistent: true,
     cwd: '.'
   });

let str = projectPath;
let found = str.replace(/../../\../,'');
let log = console.log.bind(found);

watcher
  .on('add', log => log(`File ${log} has been added`))
  .on('change', path => log(`File ${path} has been changed`))
  .on('unlink', path => log(`File ${path} has been removed`));
