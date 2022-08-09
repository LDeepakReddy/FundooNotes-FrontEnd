import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrls: ['./trashnotes.component.scss']
})
export class TrashnotesComponent implements OnInit {
  trashNotes:any;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
   this.getalltrashnotes();
  }

  getalltrashnotes(){
    this.note.gettrashednoteslist().subscribe((response:any) =>{
      console.log(response);
      
      this.trashNotes = response.notes;
      console.log(this.trashNotes);
      this.trashNotes.reverse()
      
    })
  }
  receivemessageDisplaytoGetAllnotes($event:any){
    console.log("event from display to getAllNotes",$event);
    this.getalltrashnotes()
  }

}
