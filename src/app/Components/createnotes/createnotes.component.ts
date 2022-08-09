import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NoteService } from 'src/app/Services/noteService/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {

  show = false;
  createnoteForm!: FormGroup;



  constructor(private formBuilder: FormBuilder, private note: NoteService, private snackbar: MatSnackBar) { }
  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.createnoteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]

    });
  }


  onOpen() {
    this.show = true;
  }
  // onClose() {


  // }
  onSubmit() {
    this.show = false;

    if (this.createnoteForm.valid) {
      console.log(this.createnoteForm.value)

      let reqData = {
        title: this.createnoteForm.value.title,
        description: this.createnoteForm.value.description
      }
      this.note.createnotes(reqData).subscribe((response: any) => {
        console.log(response);
        this.messageEvent.emit(response)
        console.log("messageEvent", this.messageEvent);
        this.snackbar.open('Note created Successfully !', '', {
          duration: 2000,
        });

      })

    } else {
      console.log("enter data");
    }
  }

}


