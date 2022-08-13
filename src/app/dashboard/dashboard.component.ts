import { Component, Input, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CreatelabelComponent } from '../Components/createlabel/createlabel.component';
// import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { LabelService } from 'src/app/Services/labelService/label.service';
import { DataService } from 'src/app/Services/dataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() labelList: any;
  isMenuOpen = true;
  contentMargin = 200;
  mobileQuery: MediaQueryList;
  value: any;
  
  labelname: any;

  constructor(media: MediaMatcher, private route: Router, private snackBar: MatSnackBar, private dataService: DataService,
    public dialog: MatDialog, private labelService: LabelService,) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  snavToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.contentMargin = 50;
    }
    else {
      this.contentMargin = 400;
    }
  }

  ngOnInit(): void {
    this.getLabels();

  }
  notes() {
    this.route.navigateByUrl('dashboard/getallnotes');
    // (<any>this.route).navigate([`/${'dashboard/getallnotes'}`]);
  }
  Archive() {
    this.route.navigateByUrl('dashboard/archiveNotes')
  }
  Trash() {
    this.route.navigateByUrl('dashboard/trash')
  }



  Logout() {
    localStorage.removeItem('token');
    this.route.navigateByUrl('/login');
    this.snackBar.open('Logged out successful..', '', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'

    })
  }

  searchTitle(event: any) {
    console.log("input in search field===", event.target.value);
    this.value = event.target.value
    let data = {
      type: 'search',
      data: [this.value]
    }
    this.dataService.changeData(data)
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreatelabelComponent, {
      
      width: '400px',
      
      height: '',
      
    },
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result)
    });
  }
  getLabels() {
    this.labelService.getallLabels().subscribe(
      (response: any) => {
        console.log(response.label);
        console.log(response);
        this.labelList = response['label']
        console.log('labelList',this.labelList)
      },
      error => {
        console.log(error);
      }
    )
  }


}
