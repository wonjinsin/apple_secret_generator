# apple_secret_generator

Simple Apple Secret key generator for javascript

## Getting Started

### Installing

```
npm install apple_secret_generator
```

## Usage

```
const aps = require("apple_secret_generator");

const token = aps.generate({
  keyFileLocation: "./AppleLoginAuthKey.p8", // put generated p8 file directory
  expires: 180,
  team_id: process.env.TEAM_ID, // App ID Prefix's TEAM ID
  identifier: process.env.IDENTIFIER, // Services IDs IDNETIFIER
  key_id: process.env.KEY_ID, // Key ID
});

console.log(token);

```

## Built With

* [node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - jwt generator

## Authors

* **wonjinsin** - https://github.com/wonjinsin/apple_secret_generator

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details