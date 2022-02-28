import type { Command } from 'commander';
import { getBucket } from '../api';
import { basename } from 'path';
import { resolve } from 'path';

export default (program: Command) =>
    program
        .command('download <file> [output]')
        .description('Download a file from backblaze')
        .option('--name <name>', 'The name of the file')
        .action(async (file, output, options) => {
            const dest = resolve(output, options.name || basename(file));
            const bucket = getBucket(options);

            await bucket.download(file, dest);
        });
