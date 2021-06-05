import { Component, OnInit } from '@angular/core';
import { ResourceDetailService } from 'src/app/shared/resource-detail.service';
import {NgForm} from '@angular/forms';
import { ResourceDetail } from 'src/app/shared/resource-detail.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-resource-detail-form',
  templateUrl: './resource-detail-form.component.html',
  styles: [
  ]
})
export class ResourceDetailFormComponent implements OnInit {

  constructor(public service:ResourceDetailService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.updateResource(form);
  }

  insertResource(form:NgForm){
    this.service.postResourceDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Submitted successfully.", "Resource detail registered."); 
      },
      err =>{
        console.log(err);
      }
    );
  }

  updateResource(form:NgForm){
    this.service.putResourceDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info("Updated successfully.", "Resource detail registered."); 
      },
      err =>{
        console.log(err);
        this.insertResource(form);
      }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new ResourceDetail();
  }

}
