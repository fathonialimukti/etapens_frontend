export default interface Frontend {
  _id: string,
  title: string;
  description: string;
  sourceCode: string;
  appName: string;
  documentUrl?: string;
  url?: string;
  images?: string[];
  tech?: string[];
  mentors?: string[];
  creator: string;
}