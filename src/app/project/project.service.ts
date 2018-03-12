declare var require: any;

import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject'

@Injectable()
export class Project {

    public projectSelected = new Subject<number>();

    assignID(seed: string) {
        var seedrandom = require('seedrandom');
        var rng = seedrandom(seed);
        var id = rng();                  

        return id;
    }

    expandProject(projID: number) {
        this.projectSelected.next(projID);
    }

    closeProjects() {
        this.projectSelected.next(-1);
    }
}