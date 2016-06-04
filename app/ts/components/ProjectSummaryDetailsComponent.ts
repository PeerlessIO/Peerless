import { Component } from '@angular/core';
import { ProjectHeader } from './ProjectHeaderComponent';
import { ProjectTimeline } from './ProjectTimelineComponent';
import { Tags } from './TagsComponent';
import { Project } from '../models/Project';

@Component({
    selector: 'project-summary-details',
    inputs: ['project'],
    directives: [ProjectHeader, ProjectTimeline, Tags],
    template: `
    <div *ngIf="project">
        <project-header [title]="project.title" 
                        [instructor]="project.instructor">
        </project-header>
        <project-timeline [stateDate]="project.startDate" 
                          [effort]="project.effort">
        </project-timeline>
        <tags></tags>
    </div>
    `
})
export class ProjectSummaryDetails {
    project: Object;
}
