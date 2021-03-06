const path = require('path');
const requireDir = require('require-dir');

const spiceName = 'jollof-spice-blog';

module.exports = async function (jollof) {
    try {
        jollof.log.info(`Adding Spice: ${spiceName}...`);

        //Run models
        requireDir(path.join(__dirname, 'app', 'models'), { recurse: true });



        //Add to jollof
        jollof.spices.push({
            name: 'blog',
            statics: {
                rootDir: path.join('node_modules', spiceName, 'static'),
                rootPath: '/blogstatic',
            },
            views: {
                path: path.join('node_modules', spiceName, 'app', 'views')
            },
            routes: require('./app/routes')

        });
    } catch (ex) {
        console.error(ex)
    }
};
