import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { category } from '../_interfaces/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  basePath = environment.apiUrl + 'api/Categories';
  constructor(private http: HttpClient) {}

  getActives(): Observable<category[]> {    
    return this.http.get<any>(this.basePath + '/Actives');
  }
}
