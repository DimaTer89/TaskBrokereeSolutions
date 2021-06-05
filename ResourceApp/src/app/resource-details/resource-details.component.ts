import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ResourceDetail } from '../shared/resource-detail.model';
import { ResourceDetailService } from '../shared/resource-detail.service';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styles: [
  ]
})
export class ResourceDetailsComponent implements OnInit {

  constructor(public service:ResourceDetailService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selected:ResourceDetail){
    this.service.formData = Object.assign({}, selected);
  }

  onDelete(id:number){
    if (confirm("Are you sure to delete this resource ?")){
      this.service.deleteResource(id)
      .subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error("Deleted successfully.", "Resource detail deleted.");
      },
      err=>{
        console.log(err);
      }
    )
    }
  }
}
