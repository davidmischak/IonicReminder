import { DatePipe, Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReminderService } from '../services/reminder.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public reminderForm: FormGroup;
  public date: Date;

  constructor(private reminderService: ReminderService, public datepipe: DatePipe) {
    this.reminderForm = new FormGroup({
      todo: new FormControl(''),
      date: new FormControl('')
    });
  }

  public createRemind() {
    let item = {
      todo: this.reminderForm.getRawValue().todo,
      date: this.reminderForm.getRawValue().date
    }

    this.reminderService.addRemind(item);
  }
}
