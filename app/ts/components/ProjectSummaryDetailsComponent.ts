import { Component } from '@angular/core';
import { ProjectHeader } from './ProjectHeaderComponent';
import { ProjectTimeline } from './ProjectTimelineComponent';
import { Tags } from './TagsComponent';

@Component({
    selector: 'project-summary-details',
    inputs: ['project'],
    directives: [ProjectHeader, ProjectTimeline, Tags],
    template: `
    <div *ngIf="project">
        <project-header 
            [title]="project.title" 
            [instructor]="project.instructor">
        </project-header>
        <project-timeline 
            [startDate]="project.startDate" 
            [effort]="project.effort" 
            [participants]="project.participants">
        </project-timeline>
        <tags
            [tags]="project.tags">
        </tags>
    </div>
    `
})
export class ProjectSummaryDetails {
    project: Object;
}
