const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files_es5 = [
    './dist/demo-angular9-web-component/runtime-es5.js',
    './dist/demo-angular9-web-component/polyfills-es5.js',
    './dist/demo-angular9-web-component/main-es5.js'
  ];
  const files_es2015 = [
    './dist/demo-angular9-web-component/runtime-es2015.js',
    './dist/demo-angular9-web-component/polyfills-es2015.js',
    './dist/demo-angular9-web-component/main-es2015.js',
  ];

  // https://stackoverflow.com/questions/60192247#tab-top
  await fs.ensureDir('./exported-components');
  await concat(files_es5, './exported-components/demo-angular9-web-component-es5.js');
  await concat(files_es2015, './exported-components/demo-angular9-web-component-es2015.js');
  fs.removeSync('./dist');
})();
