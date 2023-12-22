export {}

/**
 * This file is to prevent "Namespace 'NodeJS' has no exported member 'Global'" which is related to the Jest package.
 * NodeJS.Global error with '@types/node 16 >='. Has been replaced w/ typeof globalThis.
 * Ref: https://github.com/jestjs/jest/issues/11640
 */
declare global {
  namespace NodeJS {
    interface Global {}
  }
}