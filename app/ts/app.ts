// App entry point
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ProjectSummary } from './components/ProjectSummaryComponent';

@Component({
    selector: 'peerless-app',
    directives: [ProjectSummary],
    template: `
    <project-summary></project-summary>
    `
})
class PeerlessApp {}

bootstrap(PeerlessApp).catch((err: any) => console.error(err));