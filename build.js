const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, 'dist');

if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
}

fs.copyFileSync(
    path.join(__dirname, 'app.js'),
    path.join(buildDir, 'app.js')
);

fs.writeFileSync(
    path.join(buildDir, 'build-info.txt'),
    'Jenkins HW6 Build Successful!\nNode.js Application'
);

console.log('Build completed successfully!');
console.log('Artifacts created in dist folder.');
