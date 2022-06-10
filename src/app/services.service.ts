import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import { map, mergeMap, Subject, switchMap } from 'rxjs';
import { of } from 'rxjs';
import { MoreInfoComponent } from './more-info/more-info.component';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { 
   
  }
  i=0
  fil:any
  vehicl:any
  starshi:any
  url='https://swapi.dev/api/people';
  serFun(){
    return this.http.get(this.url);
  }
  filmsFun(film:any){
  this.fil=this.http.get(film);
 
    
 
 
   
  
  
 }
 
 

  vehiclesFun(vehicle:any){
    this.vehicl= this.http.get(vehicle); 
    
  }
  starshipFun(starship:any){
    this.starshi=this.http.get(starship);
  }
 
}
