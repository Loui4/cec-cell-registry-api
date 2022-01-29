import { BibleClass } from "./bible-class.interface";
import { Member } from "./member.interface";

export interface BibleClassMembership{
    id:number;
    bibleClassId:number;
    bibleClass?: BibleClass;
    role:string;
    memberId:number;
    member?:Member;
    
}