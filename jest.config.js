module.exports = {
    "setupFilesAfterEnv": ["<rootDir>/src/__tests__/setupTests.js"],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "globals": {
        "ts-jest": {
            tsConfig: {
                importHelpers: true,
            }
        }
    },
    "moduleNameMapper": {
        "@(.*)$": "<rootDir>/src/renderer/$1"
    },
}