#!/usr/bin/env node

import {Config, Errors, flush, run} from '@oclif/core';
import Try from '@steamship/cli/try.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The purpose of the try-steamship NPM package is to invoke the `ship try` command
// with no setup.

// process.argv.splice(2, 0, 'try')

const config = await Config.load(__dirname)

await config.runCommand('ship', process.argv, new Try())

// (new Try()).run(process.argv, import.meta.url)
//     .then(flush)
//     .catch(Errors.handle);
