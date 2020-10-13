import { Component } from '@angular/core';
import {HttpClient}  from '@angular/common/http'; 
import {Book} from './train_book';
import {movie_Book} from './movie_book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-day3';
  x:number;
  name:string;
   Books: any = [];
   book : Book;
   errorMsg : string;

   movie_Books: any = [];
   movie_Book : Book;
   errorMsg1 : string;

constructor(private httpClient : HttpClient){}  ngOnInit()
  {    this.httpClient.get("assets/data/train_reservation.json"). 
      subscribe (data =>
        {
          console.log(data);
          this.Books = data;              
        }, 
        (error) => 
         {
               console.error ("error has occured");
               this.errorMsg = error.message;
               alert (this.errorMsg);
         }
        );  
      this.httpClient.get("assets/data/movie.json"). 
      subscribe (data =>
        {
          console.log(data);
          this.movie_Books = data;  
            
        }, 
        (error) => 

         {
               console.error ("error has occured");
               this.errorMsg1 = error.message;
               alert (this.errorMsg1);
         }
        );       
   
  }

Search(){
  if(this.name != ""){
    this.movie_Books = this.movie_Books.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });

  }else if(this.name != ""){
    this.ngOnInit();
  }
  
}




}
