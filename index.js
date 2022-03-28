const commisions = require('./commisions.js');


const getCommisions = async () =>{
    await commisions.getCommisions();
}

getCommisions();