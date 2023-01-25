import { Score } from "./Score";


export class Student{

    fname?:string;
    Iname?: string;
    cp?: string;
    scores?: Score[];

    constructor(fname:string, Iname:string, cp:string, scores:Score[]){
        this.fname = fname;
        this.Iname = Iname;
        this.cp = cp;
        this.scores = scores;

    }
}