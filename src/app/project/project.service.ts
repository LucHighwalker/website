import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject'

@Injectable()
export class Project {

    public projectSelected = new Subject<number>();
    
    private idCounter: number = -1;

    assignID() {
        this.idCounter++;
        return this.idCounter;
    }

    expandProject(projID: number) {
        this.projectSelected.next(projID);
    }

    closeProjects() {
        this.projectSelected.next(-1);
    }
}