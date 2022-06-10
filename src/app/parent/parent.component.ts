import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  title = 'task';
  remove=''
  nam='null';
  x: any;
  time: any;
  y: any;
  z: any;
  d = [1, 2, 3, 4];
  g = [5, 6, 7, 8];
  arr2:any;


  arr=[]
  key=null;
  i:any;
  index=-1
  size:any
  del(a:any){
    console.log('delet fun')
  this.key=a;
  this.fullFun()

  
  }
  fullFun(){
    this.ser.serFun().subscribe(data => {
      this.x = data;

      this.y = this.x.results;
    
   this.arr=this.y;
   
    
   this.size=this.arr.length;

          if(this.key!=null){
            this.arr2=this.arr;
            
           for(let i = 0; i < this.size; i++)
          {
            
              if(this.arr2[i].name == this.key)
              {
               
                  this.index = i;
                  
                  break;
              }
          }
          
   
             if(this.index != -1)
          {
            console.log(this.key);
              //shift all the element from index+1 by one position to the left
              for(let i = this.index; i < this.size - 1; i++)
                  this.arr2[i] = this.arr2[i+1];
      
            //  printf("New Array : ");
              for(let i = 0; i < this.size - 1; i++)
                  console.log(this.arr2[i]);
          }
        }
        else
        {
          console.log("else part")
           this.arr2=this.arr; 
        }
    
      
      

    }
    )
  }
  constructor(private ser: ServicesService) {


  }
  obj$: Observable<string> = of('hello everyone');
  ngOnInit() {
    this.fullFun();
  }

  filmFetch(l: any) {
    for (var val of l) {
      this.ser.filmsFun(val);

    }

  }
  vehicleFetch(l: any) {
    for (var val of l) {

      this.ser.vehiclesFun(val)
    }

  }


starshipFetch(l:any){
for(var val of l){
  this.ser.starshipFun(val)
}
}

  

  
  


}

