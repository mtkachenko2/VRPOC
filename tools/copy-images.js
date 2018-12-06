var fs = require('fs');

console.log('Simulating vrtest image generation from source files into images');

fs.copyFile('src/test_01.png', 'tmp/output/chrome/test_01.png', (err)=> {
    if (err) throw err;
    console.log('src/test_01.png was copied to tmp/output/chrome/ directory');
});

fs.copyFile('src/test_02.png', 'tmp/output/chrome/test_02.png', (err)=> {
    if (err) throw err;
    console.log('src/test_02.png was copied to tmp/output/chrome/ directory');
});