import { Church } from "./church.interface";

export interface BibleStudyClass {
    id:number;
    name:string;
    church: Church;
    venue: string
}