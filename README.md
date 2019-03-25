# TypeScript PoC: Exported `Map` missing methods

When exporting a Map, it will lose all context of the necessary ES6 methods (ex. `has`, `get`, `set`, etc.). 

Note that this only applies to the Map when exported from a module... In `src/utils/items.ts`, the Map is constructed using the `set` method, witout issue.