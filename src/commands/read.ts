import type { Command } from 'commander';
import { getBucket } from '../api';

export default (program: Command) =>
    program
        .command('read <file>')
        .description('Read a file from backblaze')
        .action(async (file, options) => {
            const bucket = getBucket(options);
            console.log(await bucket.read(file));
        });
