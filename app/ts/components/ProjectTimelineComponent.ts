import { Component } from '@angular/core';
import moment = require('moment');

@Component({
    selector: 'project-timeline',
    inputs: ['startDate', 'effort'],
    template: `
    {{effort}} hours of work
    
    {{daysUntilStart}} days until kickoff
    
    53 peers participating
    `
})
export class ProjectTimeline {
    startDate: string;
    effort: number;
    daysUntilStart: number;
    
    constructor() {
        let today = moment();
        this.daysUntilStart = today.diff(moment(this.startDate), "days")
    }
}