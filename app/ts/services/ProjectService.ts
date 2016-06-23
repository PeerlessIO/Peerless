// Angular
import { Injectable, provide } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProjectService {
    // URL to backend API
    static BASE_URL: string = 'http://localhost:3000'
    
    constructor(public http: Http) {}
    
    // API call to get project by ID
    getProject(id: string): Observable<any> {
        let queryURL: string = `${ProjectService.BASE_URL}/project/${id}`;
        return this.http.request(queryURL).map((res: any) => res.json());
    }
}

// Declare the provider and make it available for DI.
export var PROJECT_PROVIDERS: Array<any> = [
    provide(ProjectService, {useClass: ProjectService})
];
