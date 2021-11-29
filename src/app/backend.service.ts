// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class BackendService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';

@Injectable({  
   providedIn: 'root'  
   })  
   export class BackendService {
    url="http://127.0.0.1:8080/student" 
    constructor(private http: HttpClient) { }
    getPosts(){  
    return this.http.get(this.url);  
    }  
} 
