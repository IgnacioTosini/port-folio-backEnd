import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js', 'json'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    moduleNameMapper: {
        '^express-validator$': '<rootDir>/node_modules/express-validator',
    },
    testMatch: ['<rootDir>/src/__test__/**/*.test.ts'],
};

export default config;