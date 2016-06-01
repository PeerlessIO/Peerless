export class Project {
    _id: string;
    title: string;
    instructor: string;
    effort: number;
    startDate: string;
    participants: number;
    tags: string[];
    
    constructor(obj?: any) {
        this._id             = obj && obj._id           || null;
        this.title           = obj && obj.title         || null;
        this.instructor      = obj && obj.instructor    || null;
        this.effort          = obj && obj.effort        || null;
        this.startDate       = obj && obj.startdate     || null;
        this.participants    = obj && obj.participants  || null;
        this.tags            = obj && obj.tags          || null
    }
}