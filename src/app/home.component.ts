import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector:'monocept-home',
    templateUrl: './home.component.html' 
})
export class HomeComponent{
    message:string
    constructor(){
        this.message='develop by swabhav';
    }
}