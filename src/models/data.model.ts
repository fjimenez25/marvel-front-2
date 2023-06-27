import { IResult } from "../models/result.model"

export interface IData {
    offset:number,
    limit:number,
    total:number,
    count:number,
    results: IResult[]
}