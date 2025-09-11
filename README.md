# adventure-engine-cli

A CLI game engine (and game) made with NodeJS

## How to use

1: Install npm dependencies with `npm i`  
2: Transpile and run the project using `npm run dev`

That's it. Now it's just a matter of looking through the files and documentation to see what each thing does.

## Package scripts

### > clear

_Removes the distribution folder._  
Command: `npx rimraf dist`

### > build

_Removes the distribution folder and transpiles ./src_  
Command: `npm run clear_build && tsc`

### > dev

_Shortcommand for build and run. Does not actually open a developer environment in any technical sense._  
Command: `npm run build && node dist/program.js`

## Dependencies

### Rimraf

Cross-platform file removal.  
Currently used to remove the distribution folder when making manual builds.
