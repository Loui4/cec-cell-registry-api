import { Week } from "./week.interface";
import { Year } from "./year.interface";

export interface CellAttendance {
    id:number;
    memberId:number;
    bibleClassId:number;
    yearId: number;
    weekId: number;
    year?:Year;
    week?:Week
}