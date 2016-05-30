import { Component } from '@angular/core';
import { ProjectSummaryDetails } from './ProjectSummaryDetails'

@Component({
    selector: 'project-summary',
    directives: [ProjectSummaryDetails],
    template: `
    <img src="/app/images/project1.png">
    <project-summary-details></project-summary-details>
    `
})
export class ProjectSummary {
}