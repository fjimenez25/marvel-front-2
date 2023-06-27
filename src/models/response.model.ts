import { IData } from "../models/data.model"

export interface IResponse {
    code:number,
    status:string,
    copyright:string,
    attributionText:string,
    attributionHTML:string,
    data:IData,
    etag:string
}