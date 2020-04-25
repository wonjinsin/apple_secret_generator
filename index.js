const jwt = require("jsonwebtoken");
const fs = require("fs");

export default apple_secret_generator = function(file, expires, team_id, identifier, key_id){

    const privateKey = fs.readFileSync(file); // put p8 file directory
    const token = jwt.sign({}, privateKey, {
    algorithm: "ES256",
    expiresIn: expires + " days",
    audience: "https://appleid.apple.com",
    issuer: team_id, // App ID Prefix's TEAM ID
    subject: identifier, // Services IDs IDNETIFIER
    keyid: key_id // Key ID
    });

    return token;

}

