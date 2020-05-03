import { Component, OnInit  } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import {  FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import * as data from '../../assets/db.json';
import * as Chartist from 'chartist';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
    public emailChartData: any;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public data:any[];
    contactForm: FormGroup;
    editcontactForm: FormGroup;
    sendMessageForm: FormGroup;

    name: string = "";
    email: string = "";
    phone: string= "";
    company:string="";
    address:string="";
    message:string="";
    successmessage:string="";
    addsuccess:string="";
    updatesuccess:string="";
  

    contacts: any = (data as any).default;
    viewcontact: any ;
    editcontact: any;

  constructor(private router: Router, private fb: FormBuilder) {

    this.addcontactForm();
   
  }

  addcontactForm(){

  this.contactForm = this.fb.group({
    name:['',[Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    company:['',[Validators.required]],
    address:['',[Validators.required]]
  })
  }

  updatecontactForm(){ 

    this.editcontactForm = this.fb.group({
     name:['',[Validators.required]],
     email: ['', [Validators.required, Validators.email]],
     phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
     company:['',[Validators.required]],
     address:['',[Validators.required]]
    })
    }



    sendcontactForm(){ 

      this.sendMessageForm = this.fb.group({
       message:['',[Validators.required]]
      })
      } 


contact(contactForm: NgForm) {
  this.viewcontact=data;
  this.viewcontact=this.viewcontact.push(contactForm.value);
  this.addsuccess="Contact added successfully";
   }

updatecontact(editcontactForm: NgForm) {
  this.updatesuccess="Contact updated successfully"; 

   }  

  


getcontact(){
  this.contacts=data;
}
viewContact(i){
  this.viewcontact=data[i];
}
editContact(i){
  this.editcontact=data[i];
}

sendmodelMessage(i){
  this.viewcontact=data[i];
}

sendMessage(sendMessageForm: NgForm) {
  this.successmessage="Message send successfully";
 }  

clearmethod(){
    this.contactForm.reset();
  
  }


  ngOnInit() {
    this.getcontact();
    this.viewcontact=data[0];
    this.addcontactForm();
    this.updatecontactForm();
    this.sendcontactForm();
   

      this.emailChartData = {
        labels: ['62%', '32%', '6%'],
        series: [62, 32, 6]
      };
     

     
      this.hoursChartData = {
        labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
        series: [
          [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
          [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
          [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
        ]
      };
      this.hoursChartOptions = {
        low: 0,
        high: 800,
        showArea: true,
        height: '245px',
        axisX: {
          showGrid: false,
        },
        lineSmooth: Chartist.Interpolation.simple({
          divisor: 3
        }),
        showLine: false,
        showPoint: false,
      };
      this.hoursChartResponsive = [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
     

      
      this.activityChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
        ]
      };
      this.activityChartOptions = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: '245px'
      };
      this.activityChartResponsive = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      


    }

}
