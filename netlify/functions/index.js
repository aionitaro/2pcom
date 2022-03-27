exports.handler = async function(event, context) {
    const commisions = require('./commisions.js');

commisions.getCommisions();

}