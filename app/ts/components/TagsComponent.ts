import { Component, Input } from '@angular/core';

@Component({
    selector: 'tags',
    inputs: ['tags'],
    template: `
    Tags: {{formattedTags}}
    `
})
export class Tags {
    @Input() tags: string[];
    formattedTags: string;
    
    ngOnInit() {
        this.formattedTags = this.tags.join(', ');
    }
}