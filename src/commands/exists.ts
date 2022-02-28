import type { Command } from 'commander';
import { getBucket } from '../api';

export default (program: Command) =>
    program
        .command('exists <file>')
        .description('Check if a file exists in bucket')
        .action(async (file, options) => {
            const bucket = getBucket(options);
            console.log(await bucket.exists(file));
        });
