const Token = require("../models/Token");

async function authenticator(req, res, next) {
    try {
        const userToken = req.headers["authorization"];
        console.log("line 6",userToken)
        if (userToken == "null") {
            throw new Error("User not authenticated.");
        } else {
            const validToken = await Token.getOneByToken(userToken);
            console.log("this is the valid token respones")
            console.log(validToken)
            if (validToken.token === userToken) {
                console.log("tokens match")
                next()
            } else {
                throw new Error("token returned from validToken check did not match userToken")
            }
        }

    } catch (err) {
        console.log(err.message)
        res.status(403).json({ error: err.message });
    }
}

module.exports = authenticator

