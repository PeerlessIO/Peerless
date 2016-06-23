// Angular
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
// Directives
import { ProjectSummary } from './components/ProjectSummaryComponent';
// Providers
import { HTTP_PROVIDERS } from '@angular/http';
import { PROJECT_PROVIDERS } from './services/ProjectService';

@Component({
    selector: 'peerless-app',
    directives: [ProjectSummary],
    template: `
    <project-summary></project-summary>
    `
})
class PeerlessApp {}

// Register providers for DI.
bootstrap(PeerlessApp, [
    PROJECT_PROVIDERS,
    HTTP_PROVIDERS
]).catch((err: any) => console.error(err));
