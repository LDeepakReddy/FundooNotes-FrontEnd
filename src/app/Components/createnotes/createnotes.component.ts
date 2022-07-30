import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NoteService} from 'src/app/Services/noteService/note.service';



@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {

  show = false;
  createnoteForm!: FormGroup;
 
  
  
  constructor(private formBuilder: FormBuilder, private note: NoteService) { }

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
  onSubmit(){
    this.show = false;
    
    if (this.createnoteForm.valid) {
      console.log(this.createnoteForm.value)

      let reqData = {
        title: this.createnoteForm.value.title,
        description: this.createnoteForm.value.description
      }
      this.note.createnotes(reqData).subscribe((response: any) => {
        console.log(response);

      })

    } else {
      console.log("enter data");
    }
  }
    
  }
  

