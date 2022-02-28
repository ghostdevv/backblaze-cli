import type { Command } from 'commander';
import { getBucket } from '../api';
import { join } from 'path/posix';
import { basename } from 'path';

export default (program: Command) =>
    program
        .command('upload <file>')
        .description('Uploads a file to backblaze')
        .option('--name <name>', 'The name of the file when uploaded')
        .option('--folder <folder>', 'The folder to upload the file to', '')
        .action(async (file, options) => {
            const bucket = getBucket(options);

            await bucket.upload(
                file,
                join(options.folder, options.name || basename(file)),
            );
        });
