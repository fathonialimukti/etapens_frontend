export default interface Backend {
    _id: string,
    appName: string;
    description: string;
    sourceCode: string;
    creator: string;
    url?: string;
}