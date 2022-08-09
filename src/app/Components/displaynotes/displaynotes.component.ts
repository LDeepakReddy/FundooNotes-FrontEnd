import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { DataService } from 'src/app/Services/dataService/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {


  title: any;
  description: any;
  dialogRef: any;
  filteredString = '';
  msg: any;
  color:any;

  displayMessage = "note refresh";
  searchString: any;
  subscription: any;
  message: any;

  @Input() notesArraylist: any;

  @Output() messageDisplaytoGetAllnotes = new EventEmitter<string>();


  constructor(public dialog: MatDialog, private dataService: DataService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.subscription = this.dataService.searchNote.subscribe(message => {
      this.message = message;
      console.log( message.data[0]);
      this.searchString = message.data[0]
    })

  }

  openDialog(noteobject: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '600px',
      data: noteobject,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.title = result;
      this.description = result;
      this.messageDisplaytoGetAllnotes.emit(result);
      this.snackbar.open('Note updated Successfully !', '', {
        duration: 2000,
      });

    });

  }
  receivemessageTrashtoDisplay($event: any) {
    console.log("event from icon to display", $event)
    this.msg = $event;
    console.log("msg", this.msg);

    this.messageDisplaytoGetAllnotes.emit(this.msg)
  }



}






