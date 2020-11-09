import { Component } from '@angular/core';
import { Remind } from '../interfaces/remind';
import { ReminderService } from '../services/reminder.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public reminders: Remind[] = [];

  constructor(private reminderService: ReminderService) {
    this.getReminders();
  }

  public getReminders() {
    this.reminders = this.reminderService.getReminders();
  }

  public deleteRemind(item: Remind) {
    let index = this.reminders.indexOf(item);
    this.reminderService.deleteRemind(index);
    this.getReminders();
  }

}
