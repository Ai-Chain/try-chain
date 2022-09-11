#!/usr/bin/env node

// The purpose of the try-steamship NPM package is to invoke the `ship try` command
// with no setup.
process.argv.splice(2, 0, 'try')

require('@steamship/cli').run()
.then(require('@oclif/command/flush'))
.catch(require('@oclif/errors/handle'))
