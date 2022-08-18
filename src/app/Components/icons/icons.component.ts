import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';
import { ActivatedRoute } from '@angular/router';
import { DisplaynotesComponent } from '../displaynotes/displaynotes.component';
import { ArchivenotesComponent } from '../archivenotes/archivenotes.component';
import { TrashnotesComponent } from '../trashnotes/trashnotes.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  id: any;
  colour: any
  @Input() noteObject: any;
  @Output() messageTrashtoDisplay = new EventEmitter<string>();
  // @Output() color: EventEmitter<any> = new EventEmitter();


  // colors = ['green', 'red', 'blue', 'yellow', 'grey', 'purple', 'brown',
  //   'orange', 'pink',  'silver', 'teal', 'white',];

  colors: Array<any> = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'red' },
    { code: '#FF4500', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'green' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#2B65EC', name: 'darkblue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey' },
    { code: '#ffff66', name: 'lightyellow' },
    { code: '#008040', name: 'olive' },
    { code: '#732626', name: 'dark-maroon' },
    { code: '#669999', name: 'light-blue' },
    { code: '#ffa64d', name: 'light-orange' },
  ];

  isDisplayNoteComponent = false;
  isTrashComponent = false;
  isArchieveComponent = false;

  constructor(private note: NoteService, private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let comp = this.route.snapshot.component;

    if (comp == DisplaynotesComponent) {
      this.isDisplayNoteComponent = true;
    }

    if (comp == TrashnotesComponent) {
      this.isTrashComponent = true;
    }

    if (comp == ArchivenotesComponent) {
      this.isArchieveComponent = true;
    }
  }


  onDelete() {
    this.note.trashnotes(this.noteObject.id).subscribe((response: any) => {
      console.log("Note Trashed Successfully", response);
      this.messageTrashtoDisplay.emit(response);
      this.snackBar.open('Note trashed successfully..', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
    }, error => this.snackBar.open('failed to trash', '', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'

    }))

  }

  deleteForever() {
    this.note.permanentDelete(this.noteObject.id).subscribe((response: any) => {
      console.log("Note Deleted Successfully", response);
      this.messageTrashtoDisplay.emit(response)
      this.snackBar.open('Note deleted successfully!!!', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
    })
  }
  Archivenote() {

    this.note.archivenotes(this.noteObject.id).subscribe((response: any) => {
      console.log("Note Successfully archived", response);
      this.messageTrashtoDisplay.emit(response);
      this.snackBar.open('Note Archived Successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
    }, error => {
      this.snackBar.open('Failed to archieve', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
    })


  }
  unArchivenote() {

    this.note.unarchivenotes(this.noteObject.id).subscribe((response: any) => {
      console.log("Note Successfully Unarchived", response);
      this.messageTrashtoDisplay.emit(response);
      this.snackBar.open('Note UnArchived Successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
    }, error => {
      this.snackBar.open('Failed to UnArchived', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
    })

  }
  restore() {
    this.note.restorenotes(this.noteObject.id).subscribe((response: any) => {
      console.log("Note restored Successfully", response);
      this.messageTrashtoDisplay.emit(response);
      this.snackBar.open('Note restored Successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })


    })
  }

  setColor(note_colour: any) {
   
    let data = {
      id: this.noteObject.id,
      colour: note_colour
    }
    console.log(data)
    this.note.ColorNote(data).subscribe((res: any) => {
      console.log(res);
      this.messageTrashtoDisplay.emit(res);
    })
    this.snackBar.open('Note color changed', '', {
      duration: 2000,
    });
  }


}
