#!/usr/bin/env node

import {Errors, flush, run} from '@oclif/core';
import Try from '@steamship/cli/try.js';

while (process.argv.length > 0) {
    if (process.argv[0].indexOf('bin/index.js') > 0) {
        // dev mode
        process.argv.shift()
        break
    } else if (process.argv[0] == 'try-streamship') {
        process.argv.shift()
        break
    } else {
        process.argv.shift()
    }
}

Try.run(process.argv, import.meta.url)
    .then(flush)
    .catch(Errors.handle);
