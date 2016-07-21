import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { ProjectSummaryDetails } from './ProjectSummaryDetailsComponent';
import { ProjectService } from '../services/ProjectService';
import { Project } from '../models/Project';

@Component({
    selector: 'project-summary',
    directives: [CORE_DIRECTIVES, ProjectSummaryDetails],
    template: `
    <img src="/app/images/project1.png">
    <project-summary-details [project]="project"></project-summary-details>
    `
})
export class ProjectSummary {
    id: string;
    project: Object;

    constructor(public projectService: ProjectService) {
        this.id = 'd82dd4fe207311e6b67b9e71128cae77';
    }

    ngOnInit(): void {
        this.projectService
            .getProject(this.id)
            .subscribe((res: Project) => this.renderProject(res));
    }

    renderProject(res: Project): void {
        this.project = res;
    }
}
