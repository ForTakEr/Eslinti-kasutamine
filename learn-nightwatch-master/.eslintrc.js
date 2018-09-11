module.exports = {
    "env": {
        "es6": true,
        "commonjs": true,
        "node": true,
        "browser": false
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "modules": true
        }
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "no-console": 0,
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};