import { Command } from 'commander';

const program = new Command();

// Commands
import download from './commands/download';
import exists from './commands/exists';
import remove from './commands/remove';
import upload from './commands/upload';
import count from './commands/count';
import info from './commands/info';
import list from './commands/list';
import read from './commands/read';

download(program);
remove(program);
upload(program);
exists(program);
count(program);
info(program);
list(program);
read(program);

// Global Options
for (const command of program.commands)
    command
        .requiredOption(
            '--bucket <bucket>',
            'The bucket to make requests to',
            process.env.BACKBLAZE_BUCKET,
        )
        .requiredOption(
            '--key-id <key-id>',
            'The key id to use',
            process.env.BACKBLAZE_KEY_ID,
        )
        .requiredOption(
            '--key <key>',
            'The application key to use',
            process.env.BACKBLAZE_KEY,
        );

// Run
program
    .name('backblaze')
    .description(
        'A simple unofficial cli to interact with the Backblaze B2 API',
    )
    .parseAsync();
