import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.http.get("http://localhost:8000/api/"+ url).pipe(map(res => res));
  }
  public getOne(url: string,id: any): Observable<any> {
    return this.http.get("http://localhost:8000/api/"+ url + "/" +id).pipe(map(res => res));
  }
  public post(url: string, request:any): Observable<any> {
    return this.http.post("http://localhost:8000/api/"+ url, request).pipe(map(res => res));
  }
  public delete(url: string,id: string): Observable<any> {
    return this.http.delete("http://localhost:8000/api/"+ url + "/"+id).pipe(map(res => res));
  }
  public put(url: string,id: string, frontPut:any): Observable<any> {
    return this.http.put("http://localhost:8000/api/"+ url + "/"+id, frontPut).pipe(map(res => res));
  }
}
