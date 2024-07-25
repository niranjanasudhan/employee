import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-synchronous',
  templateUrl: './synchronous.component.html',
  styleUrls: ['./synchronous.component.css']
})
export class SynchronousComponent {
employee!:Observable<string>;
constructor(private data:DataService){
  // this.async()
}
  syn()
  {
    console.log("Start");
    for(let i=0;i<100000;i++){
      console.log("itration: " + i);

    }
    console.log("End");
    console.log("Stop");
  }

  async()
  {
    console.log("Start");
    this.data.fetchData().subscribe(data => {
      console.log("Data: " + data);
     
    }
    )

    console.log("End");
    console.log("Stop");

  }


  //example for observable
  ngOnInit(){

    // this.employee = new Observable{
    //   function(observer:any){
    //     try{
    //       observer.next('John Doe');
    //       observer.next('Anny');
    //       observer.next('Tisa');
    //       observer.next('Manu');
    //       observer.next('Ashly');
         
    //     }
    //     catch(error){
    //       observer.error(error);
    //     }
    //   }
      
    // };
    // this.employee.subscribe(data=>{
    //   console.log(data);
    // })



    const observable = new Observable(observer => {
      observer.next('John Doe');
      setInterval(()=>
      {
        observer.next('Anny');
      },5000);
      setInterval(()=>
        {
          observer.next('Tisa');
        },10000);
        setInterval(()=>
          {
            observer.next('Manu');
          },15000);
          setInterval(()=>
            {
              observer.next('Ashly');
            },20000);
            setInterval(()=>
              {
                observer.complete();
              },25000);
        
    
    
     
      
    });
    
    observable.subscribe({
      next: value =>{
        console.log(value)
      } ,
      error: err => console.error('Error:', err),
      complete: () => console.log('Completed')
    });
    
  }





}
