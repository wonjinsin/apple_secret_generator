const jwt = require("jsonwebtoken");
const fs = require("fs");

export interface AppleSecretGeneratorParams {
    keyFileLocation: string;
    expires?: number | string;
    team_id: string;
    identifier: string;
    key_id: string;
}

export interface AppleSecretGenerator {
  generate: (params: AppleSecretGeneratorParams) => string;
}

const apple_secret_generator: AppleSecretGenerator = {
  generate: function ({
    keyFileLocation,
    expires = "180",
    team_id,
    identifier,
    key_id,
  }) {
    const privateKey = fs.readFileSync(keyFileLocation); // put p8 file directory
    const token = jwt.sign({}, privateKey, {
      algorithm: "ES256",
      expiresIn: expires + " days",
      audience: "https://appleid.apple.com",
      issuer: team_id,
      subject: identifier,
      keyid: key_id,
    });

    return token;
  },
};

module.exports = apple_secret_generator;
