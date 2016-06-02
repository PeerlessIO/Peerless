import { Component } from '@angular/core';

@Component({
    selector: 'project-header',
    inputs: ['title', 'instructor'],
    template: `
    {{title}}
    {{instructor}}
    `
})
export class ProjectHeader {
    title: string;
    instructor: string;
}