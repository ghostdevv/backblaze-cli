import type { Command } from 'commander';
import { getBucket } from '../api';

export default (program: Command) =>
    program
        .command('remove <file>')
        .description('Remove file from bucket')
        .action(async (file, options) => {
            const bucket = getBucket(options);
            await bucket.remove(file);
        });
