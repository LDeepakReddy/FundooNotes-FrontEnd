import { Component, OnInit } from '@angular/core';
import { NoteService} from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  noteList:any;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
  }
  GetAllNotes(){
    this.note.getallnotes().subscribe((response:any)=>{
      console.log(response);
      
    }
  )}

}
