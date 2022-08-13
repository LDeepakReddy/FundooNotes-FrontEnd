import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LabelService } from 'src/app/Services/labelService/label.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createlabel',
  templateUrl: './createlabel.component.html',
  styleUrls: ['./createlabel.component.scss']
})
export class CreatelabelComponent implements OnInit {

  show = true;
  label: any;
  labelname:any;
  labelList: any;
  cursor: any;
  notecard: any;
  updated_label:any;

  constructor(private formBuilder: FormBuilder, private labelService: LabelService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getLabels()
  }
  onOpen() {
    this.show = false;
  }

  onClose() {
    this.show = true;
  }
  onCreate() {
    this.show = true;
    let data = {

      labelname: this.labelname,
      userId: localStorage.getItem('userId')
    };

    this.labelService.createlabel(data).subscribe(

      (response: any) => {
        console.log(response);
        this.matSnackBar.open('New label created', '', { duration: 2000, })
      },
      (error: any) => {
        console.log(error)
        this.matSnackBar.open('Error not created', 'try Again', { duration: 2000, })
      }
    );
  }

  getLabels() {
    this.labelService.getallLabels().subscribe((response: any) => {
      //console.log(response.data.details);
      console.log(response);
      this.labelList = response['label'];
      this.labelList.reverse();
      // console.log('labelList', this.labelList)
    },
      error => {
        console.log(error);
      })
  }

  //delete
  // deleteNoteLabel(labelList: any) {
  //   // this.show = true;
  //   console.log("Delete Labels");

  //   let data = {
  //     labelList: labelList,
  //     isDeleted: false,
  //     // userId:localStorage.getItem('userId')
  //   }
  //   console.log("delete label", data);
  //   this.labelService.deleteLabel(data).subscribe((response: any) => {

  //     this.matSnackBar.open('label deleted', '', { duration: 2000, })
  //   }),
  //     (error: any) => {
  //       console.log(error);
  //       this.matSnackBar.open('label not deleted', '', { duration: 2000, })
  //     }

  // }

  
  deleteNoteLabel(labelList: any) {
    this.labelService.deleteLabel(labelList.id).subscribe((response: any) => {
      console.log("Note Deleted Successfully", response);
    
      this.matSnackBar.open('Note deleted successfully!!!', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
    })
  }

  updateLabel(labeldata: any) {
    // this.show = true;
    console.log("update Labels");

    let data = {
      // labelList:labelList,
      // isDeleted: false,
      // id: labeldata.id,
      updated_label: labeldata.label,
      userId: localStorage.getItem('userId')
    }
    console.log("update data", data);
    this.labelService.updateLabel(data).subscribe((response: any) => {

      this.matSnackBar.open('label updated', '', { duration: 2000, })
    }),
      (error: any) => {
        console.log(error);
        this.matSnackBar.open('label not updated', '', { duration: 2000, })
      }

  }
  // updateLabel(labeldata: any) {

  //   let data = {
  //     // this noteId, title,description is coming from backend API
  //     id: labeldata.id,
  //     labelname: labeldata.label,
     
  //   }

  //   this.labelService.updateLabel(data).subscribe((response: any) => {
  //     console.log(response)
  //   })
    
  // }



}
