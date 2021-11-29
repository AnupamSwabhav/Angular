// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-studentall',
//   templateUrl: './studentall.component.html',
//   styleUrls: ['./studentall.component.css']
// })
// export class StudentallComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';  
import { BackendService } from 'src/app/backend.service';

@Component({  
   selector: 'app-studentall',  
   templateUrl: './studentall.component.html',  
   styleUrls: ['./studentall.component.css']  
})  
export class StudentallComponent implements OnInit { 
  data:any;
  constructor(private backendService: BackendService) { 
    console.log("Hello")
    this.backendService.getPosts().subscribe((result)=>{
      
      console.log("result",result)
      this.data=result
    })
  }
  ngOnInit(): void {
    
    
       }
}  