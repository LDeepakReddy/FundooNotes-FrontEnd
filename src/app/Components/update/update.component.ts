import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/noteService/note.service';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any;
  description: any;

  constructor(private note: NoteService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }



  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data);

    // this right side title and description is coming from display.html file
    this.title = this.data.title,
      this.description = this.data.description



  }

  Updatenotes() {

    let noteUpdate = {
      // this noteId, title,description is coming from backend API
      id: this.data.id,
      title: this.title,
      description: this.description,
    }

    this.note.updatenotes(noteUpdate).subscribe((response: any) => {
      console.log(response)
    })
    this.dialogRef.close()  
  }

}
