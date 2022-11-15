import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {
  public formNewCard: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required])
  });

  constructor(public dialogRef: MatDialogRef<NewCardComponent>) {}

  ngOnInit(): void {}

  public close(): void {
    this.dialogRef.close();
  }
}
