import type { Command } from 'commander';
import { getBucket } from '../api';

export default (program: Command) =>
    program
        .command('info')
        .description('Get information about bucket')
        .action(async (options) => {
            const bucket = getBucket(options);
            console.log(await bucket.info());
        });
