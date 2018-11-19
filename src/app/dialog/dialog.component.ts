import {Component, Inject} from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'dialog',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.css'],
  })
  export class DialogComponent {
    constructor(public dialog: MatDialog) {
        //setTimeout(() => this.dialog.open(DialogComponentDialog))
    }
    
    openDialog() {
      const dialogRef = this.dialog.open(DialogComponentDialog);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  } 

  @Component({
    selector: 'dialogg',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.css']
  })
  export class DialogComponentDialog {}