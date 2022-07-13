export default interface Database {
    _id: string,
    isActive: boolean;
    creator: string;
    type: string;
    dbname: string;
    username: string;
    password: string;
    note: string;
    url?: string;
}