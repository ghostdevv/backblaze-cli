# BackBlaze CLI

[![](https://img.shields.io/npm/v/backblaze-cli?label=Latest%20Version&style=for-the-badge&logo=npm&color=informational)](https://www.npmjs.com/package/backblaze-cli)
[![](https://img.shields.io/static/v1?label=Project%20Creator&message=GHOST&color=informational&style=for-the-badge)](https://ghostdev.xyz)

This is a unofficial simple backblaze CLI for CRUD based actions.

# Install

```
npm i backblaze-cli -g
```

# Authorization

All commands require being authenticated to backblaze:

## Getting auth information

1. On your backblaze account dashboard go to the section "App Keys"
2. Create an application key
3. Copy down your keyID (key id) and applicationKey (key)
4. Put this into the cli in one of the methods below

## Passing in auth information

- CLI Flags:

  ```
  --bucket <bucket>  The bucket to make requests to
  --key-id <key-id>  The key id to use
  --key <key>        The application key to use
  ```

- You can also use environment variables:

  ```
  BACKBLAZE_BUCKET=     # The bucket name
  BACKBLAZE_KEY_ID=     # The key id
  BACKBLAZE_KEY=        # The application key
  ```

# Usage

```
Usage: backblaze [options] [command]

A simple unofficial cli to interact with the Backblaze B2 API

Options:
  -h, --help                          display help for command

Commands:
  download [options] <file> [output]  Download a file from backblaze
  remove [options] <file>             Remove file from bucket
  upload [options] <file>             Uploads a file to backblaze
  exists [options] <file>             Check if a file exists in bucket
  count [options]                     Count the number of files in a bucket
  info [options]                      Get information about bucket
  list [options]                      List the files in a bucket
  read [options] <file>               Read a file from backblaze
  help [command]                      display help for command
```

# Output

Currently the CLI outputs what it recieves from the api wrapper, if you have a better way of formatting this for use in scripts but also for readability please [make a issue](https://github.com/ghostdevv/backblaze-cli) or [contact me](https://discord.gg/2Vd4wAjJnm)

# Support
-   Join the [discord](https://discord.gg/2Vd4wAjJnm)<br>
-   Create a issue on the [github](https://github.com/ghostdevv/backblaze-cli)
