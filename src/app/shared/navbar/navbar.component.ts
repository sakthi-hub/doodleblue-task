import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {  FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as user from '../../../assets/dbuser.json';

import { HomeComponent } from '../../home/home.component';


@Component({
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{


    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;
    adduserForm: FormGroup;
    
    name: string = "";
    selectedUser: string = "";
    addsuccess:string="";
    user: any = (user as any).default;
    users: any ;

    constructor(location: Location,  private element: ElementRef,private router: Router, private fb: FormBuilder) {
        this.adduservalidation();
      this.location = location;
          this.sidebarVisible = false;
    }
    
    adduservalidation(){

    this.adduserForm = this.fb.group({
      name:['',[Validators.required]]
    })
    }

    adduser(adduserForm: NgForm) {
        this.selectedUser=adduserForm.value.name;
        this.addsuccess="User added successfully";
     }

     selecteduser(i){
        this.selectedUser=user[i].name;
     }
      
    getusers(){
        this.users=user;
      }

    clearmethod(){
        this.adduserForm.reset();
      
      }


    ngOnInit(){
        this.getusers();  
        this.selectedUser=user[0].name; 

      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];


    
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }

      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
    }
}
