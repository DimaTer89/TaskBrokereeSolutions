import { Injectable } from '@angular/core';
import { ResourceDetail } from './resource-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceDetailService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'http://localhost:35264/api/Resource';
  formData : ResourceDetail = new ResourceDetail();
  list : ResourceDetail[]
  postResourceDetail(){
    return this.http.post(this.baseUrl, this.formData);
  }

  putResourceDetail(){
    return this.http.put(`${this.baseUrl}/${this.formData.id}`, this.formData);
  }

  refreshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(result=>this.list = result as ResourceDetail[]);
  }

  deleteResource(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
