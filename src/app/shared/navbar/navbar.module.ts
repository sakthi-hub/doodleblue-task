import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
    imports: [ RouterModule, CommonModule,ReactiveFormsModule,FormsModule ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})

export class NavbarModule {}
