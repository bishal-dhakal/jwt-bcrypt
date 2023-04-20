const jwt = require('jsonwebtoken');

const createToken = async() =>{

    //create jwt
    const token = await jwt.sign({_id:"2kj3bncjkskjdf556kldfjk5463jkfdg"},'sdujhfaiovcxnjkfdiglsakdcnvjdfggkuhbnjdkcviu',{
        expiresIn:'2 m'
    });
    console.log(token)

    //verify token
    const userverification = await jwt.verify(token,"sdujhfaiovcxnjkfdiglsakdcnvjdfggkuhbnjdkcviu")
    console.log(userverification)
}

createToken();