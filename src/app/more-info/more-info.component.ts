import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit {
con:any
com:any
col:any

  constructor(private ser:ServicesService ) {
    
   }

  ngOnInit(): void {
    
     this.ser.fil.subscribe((data:any)=>{
      this.con=data;

    })
       this.ser.vehicl.subscribe((data:any)=>{
        this.col=data;
        

      })

    this.ser.starshi.subscribe((data:any)=>{
      this.com=data;
    })
          
      
    
    
   
   
 
 
  }
  

    }

    
