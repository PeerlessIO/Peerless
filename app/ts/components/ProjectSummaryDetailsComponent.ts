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
    <project-header></project-header>
    <project-timeline></project-timeline>
    <tags></tags>
    `
})
export class ProjectSummaryDetails {
    project: string;
}