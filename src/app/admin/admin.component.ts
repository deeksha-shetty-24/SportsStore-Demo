import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestDataSource } from '../models/rest.datasource';

@Component({
    templateUrl: './admin.component.html'
})

export class AdminComponent {
    constructor(private datasource: RestDataSource, private router: Router) { }

    logout() {
        this.router.navigateByUrl('/');
    }
}