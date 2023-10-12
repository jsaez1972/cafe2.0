import { Injectable } from '@angular/core';
import { MaterialListItem } from '../_interfaces/material-list-item';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MaterialsService {
  basePath = environment.apiUrl + 'api/Materials';
  constructor(private http: HttpClient) {}

  getAll(filter: string): Observable<MaterialListItem[]> {
    return this.http.get<any>(this.basePath + `/All?filter=${filter}`);
  }

  create(material: MaterialListItem): Observable<any> {
    return this.http.post<any>(this.basePath + '/Create', material);
  }

  update(material: MaterialListItem): Observable<any> {
    return this.http.put<any>(
      this.basePath + `/Update/${material.id}`,
      material
    );
  }
}
