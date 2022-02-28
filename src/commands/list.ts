import type { Command } from 'commander';
import { getBucket } from '../api';

export default (program: Command) =>
    program
        .command('list')
        .description('List the files in a bucket')
        .option('--prefix <prefix>', 'Filter')
        .action(async (options) => {
            const bucket = getBucket(options);
            console.log(await bucket.list(options.prefix));
        });
