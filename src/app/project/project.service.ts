declare var require: any;

import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject'

@Injectable()
export class Project {

    public projectSelected = new Subject<number>();

    assignID(seed: string) {
        var seeded = require('seedrandom');
        var rand = seeded(seed);
        var id = (rand() + '').split('.')[1];       

        return parseInt(id);
    }

    expandProject(projID: number) {
        this.projectSelected.next(projID);
    }

    closeProjects() {
        this.projectSelected.next(-1);
    }
}