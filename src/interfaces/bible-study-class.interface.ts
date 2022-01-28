import { Church } from "./church.interface";

export interface BibleStudyClass {
    id:number;
    name:string;
    churchId:number;
    church?: Church;
    venue: string
}