import { Component, Input, OnInit } from '@angular/core';
import moment = require('moment');

@Component({
    selector: 'project-timeline',
    inputs: ['startDate', 'effort', 'participants'],
    template: `
    {{effort}} hours of work
    
    {{daysUntilStart}} days until kickoff
    
    {{participants}} peers participating
    `
})
export class ProjectTimeline implements OnInit {
    startDate: string;
    effort: number;
    daysUntilStart: number;
    
    ngOnInit() {
        let today = moment();
        this.daysUntilStart = moment(this.startDate).diff(today, "days");  
    }
}