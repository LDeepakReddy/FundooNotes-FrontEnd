import { Component, OnInit, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';
import { DataService } from 'src/app/Services/dataService/data.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  notelist: any;
  message: any;
  public subscription: any;

  constructor(private note: NoteService, private dataService: DataService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe(message => {
      this.message = message;
     
      this.getAllNotes();
    })
    this.getAllNotes();
  }


  getAllNotes() {
    this.note.getallnotes().subscribe((response: any) => {
      console.log(response);
      this.notelist = response.notes;
      console.log(this.notelist);
      this.notelist.reverse();


    }
    )
  }

   receiveMessage($event:any) {
    console.log($event);
    this.getAllNotes()

  }

  receivemessageDisplaytoGetAllnotes($event: any) {

    this.getAllNotes()
  }
}
