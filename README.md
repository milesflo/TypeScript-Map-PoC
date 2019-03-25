# TypeScript PoC: Exported `Map` missing methods

When exporting a Map, it will lose all context of the necessary ES6 methods (ex. `has`, `get`, `set`, etc.). 

Note that this only applies to the Map when exported from a module... In `src/utils/items.ts`, the Map is constructed using the `set` method, witout issue.

## How to use

The main execution is in `src/index.ts`.
Download the dependencies with `npm install` and run the script with `npm run start`.

Questions are provided in the form of comments

## Background
I discovered this bug while building a [backend API for a game](https://github.com/atomicmp/atomicmp-auth/). As such, I wanted to include similar, but minimalist, data in this PoC's `src/utils/items.json`.
