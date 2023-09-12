/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom/"],
    moduleNameMapper: {
        "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/identity-obj-proxy"
    }
};
