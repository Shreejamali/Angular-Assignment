import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent implements OnInit {
  public user:any;
  constructor(private data:DataService , private route: Router){
    
    
    
  }

  
ngOnInit(): void {
this.empData()

}
empData(){
  this.data.getData().subscribe((res:any)=>{
    this.user=res.data;
  })
  
}

}