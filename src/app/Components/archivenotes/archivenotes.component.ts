import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrls: ['./archivenotes.component.scss']
})
export class ArchivenotesComponent implements OnInit {
  archiveNotes:any;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
   this. getallarchivenotes();
  }

  getallarchivenotes(){
    this.note.getarchivenoteslist().subscribe((response:any) =>{
      console.log(response);
      
      this.archiveNotes = response.notes;
      console.log(this.archiveNotes);
      this.archiveNotes.reverse()
    })
  }

  receivemessageDisplaytoGetAllnotes($event:any){
    console.log("event from display to getAllNotes",$event);
    console.log("auto refresh done");
    
    this.getallarchivenotes()
  }

}
