exports.handler = async function(event, context) {
    
const commisions = require('./commisions-background.js');
commisions.getCommisions();

}
