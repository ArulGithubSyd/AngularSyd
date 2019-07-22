import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GetFactor {
  public API = 'http://localhost:54143/api/';
  public FACTOR_API = '${this.API}/premium';

  constructor(private http: HttpClient) {}

  getFactor(occid: number) {
    return this.http.get(`${this.FACTOR_API}/${occid}`);
  }


}