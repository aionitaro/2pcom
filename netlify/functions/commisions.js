exports.handler = async function(event, context) {

const axios = require('axios'); //add this line, this imports the axios functionalities into your code

const getCommisions = async () => {
    axios.post('https://api.2performant.com/users/sign_in', {
        user: {
            email: 'suntuluitor@gmail.com',
            password: 'P@rola123'
        }
    })
        .then(function (response) {
            axios.get('https://api.2performant.com/affiliate/commissions',
                {
                    headers: {
                        'Accept': 'application/json',
                        'access-token': response.headers['access-token'],
                        client: response.headers['client'],
                        uid: response.headers['uid'],
                        'token-type': 'Bearer',
                        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36 Edg/99.0.1150.52'
                    }
                }

            ).then(function (response) {
                let commissions = response.data.commissions
                console.log(commissions);
            }

            ).catch(function (error) {
                console.log(error);
            });

        })
        .catch(function (error) {
            console.log(error);
        });

    }

module.exports = {getCommisions};

}