import type { Command } from 'commander';
import { getBucket } from '../api';

export default (program: Command) =>
    program
        .command('count')
        .description('Count the number of files in a bucket')
        .action(async (options) => {
            const bucket = getBucket(options);
            console.log(await bucket.count());
        });
