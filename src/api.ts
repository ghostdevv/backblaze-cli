import Bucket from 'backblaze';

interface Options {
    bucket: string;
    keyId: string;
    key: string;
}

export const getBucket = (options: Options) =>
    Bucket(options.bucket, {
        id: options.keyId,
        key: options.key,
    });
