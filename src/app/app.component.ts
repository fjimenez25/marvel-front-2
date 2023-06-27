import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IResponse } from "../models/response.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Marvel Api';
  response = {} as IResponse;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log("call getharacters..");
    this.getCharacters();
  }


  getCharacters() {

    let httpHeaders= new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append("Authorization", "Basic " + "admin:password");

    const httpOptions = {headers: httpHeaders};


    /*
    this.http.get("http://localhost:8088/marvel/demo/public/characters/1009178", httpOptions).subscribe((response) =>{
      console.log("print data..");
      console.log(response);
      //this.response = response;
    });
    */
    this.http.get<IResponse>("http://localhost:8088/marvel/demo/public/characters/1009178", httpOptions).subscribe((response) =>{
      console.log("print data..");
      console.log(response);
      console.log("print results..");
      console.log(response.data.results)
      this.response = response;
    });



  }


}
