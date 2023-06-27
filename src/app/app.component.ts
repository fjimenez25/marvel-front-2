import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IResponse } from "../models/response.model"
import { IResult } from 'src/models/result.model';
import { IBitacora } from 'src/models/bitacora.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Marvel Api';
  response = {} as IResponse;
  displayedColumns: string[] = ['demo-id', 'demo-name', 'demo-desc'];

  displayedColumnsBitacora: string[] = ['demo-id', 'demo-serviceName', 'demo-date'];
  resultSelected = {} as IResult;
  bitacora: IBitacora[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log("call getharacters..");
    this.getCharacters();
    //this.getBitacora();
  }


  getCharacterByCharacter(character:number) {

    let httpHeaders= new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append("Authorization", "Basic " + "admin:password");

    const httpOptions = {headers: httpHeaders};

    this.http.get<IResponse>("http://localhost:8088/marvel/demo/public/characters/"+character, httpOptions).subscribe((response) =>{
      console.log("print data..");
      console.log(response);
      console.log("print result");
      console.log(response.data.results[0])
      this.resultSelected = response.data.results[0];
    });
    
  }
  
  getCharacters() {

    let httpHeaders= new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append("Authorization", "Basic " + "admin:password");

    const httpOptions = {headers: httpHeaders};

    this.http.get<IResponse>("http://localhost:8088/marvel/demo/public/characters", httpOptions).subscribe((response) =>{
      console.log("print data..");
      console.log(response);
      console.log("print results..");
      console.log(response.data.results)
      this.response = response;
    });

  }


  getBitacora() {

    let httpHeaders= new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append("Authorization", "Basic " + "admin:password");

    const httpOptions = {headers: httpHeaders};

    this.http.get<IBitacora[]>("http://localhost:8088/marvel/demo/public/bitacora", httpOptions).subscribe((response) =>{
      console.log("print data..");
      console.log(response);
      this.bitacora = response;
    });

  }

  showBitacora(){

    this.getBitacora();


  }



  loadCharacter(result: IResult){

    this.getCharacterByCharacter(result.id);
    
    console.log("load character")


  }
}
