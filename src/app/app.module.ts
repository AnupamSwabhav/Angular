// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// //import { HomeComponent } from './home.component';
// import { StudentComponent } from './student/student.component';
// import { DatacomponentComponent } from './datacomponent/datacomponent.component';


// @NgModule({
//   declarations: [
//     //HomeComponent,
//     StudentComponent,
//     DatacomponentComponent,
    
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   //bootstrap: [HomeComponent]
//   bootstrap: [StudentComponent]

// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';import { AppRoutingModule } from './app-routing.module';  
import { StudentallComponent } from './Component/studentall/studentall.component';  
import { HttpClientModule } from '@angular/common/http';  
import { AppComponent } from './app.component';  
//import { HttpClientModule } from '@angular/common/http';
@NgModule({  
   declarations: [  
    StudentallComponent,  
],  
imports: [  
   BrowserModule,  
   AppRoutingModule,  
   HttpClientModule  
],  
providers: [],  
   bootstrap: [StudentallComponent]  
})  
export class AppModule { }  