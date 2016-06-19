import { Injectable, provide } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Project } from '../models/Project';

@Injectable()
export class ProjectService {
    static BASE_URL: string = 'http://localhost:3000'
    
    constructor(public http: Http) {}
    
    getProject(id: string): Observable<any> {
        let queryURL: string = `${ProjectService.BASE_URL}/project/${id}`;
        return this.http.request(queryURL).map((res: any) => res.json());
    }
}

export var PROJECT_PROVIDERS: Array<any> = [
    provide(ProjectService, {useClass: ProjectService})
];