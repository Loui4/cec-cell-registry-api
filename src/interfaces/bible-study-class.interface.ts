import { Church } from "./church.interface";

export interface BibleClass {
    id:number;
    name:string;
    churchId:number;
    church?: Church;
    venue: string
}