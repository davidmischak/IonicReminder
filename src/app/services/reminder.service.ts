import { Injectable } from '@angular/core';
import { Remind } from '../interfaces/remind';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  public static reminders: Remind[] = [];

  constructor() {
    if (localStorage.getItem("reminders") != null) {
      this.loadReminders();
    }
  }

  public addRemind(item) {
    let remind = {
      id: ReminderService.reminders.length + 1,
      todo: item.todo,
      date: item.date
    }
    ReminderService.reminders.push(remind);
    this.saveReminders();
  }

  public getReminders(): Remind[] {
    return ReminderService.reminders;
  }

  public deleteRemind(element) {
    ReminderService.reminders.splice(element, 1);
    this.saveReminders();
  }

  public saveReminders() {
    let reminders = JSON.stringify(ReminderService.reminders);
    localStorage.setItem("reminders", reminders);
  }

  public loadReminders() {
    let reminders: Remind[] = JSON.parse(localStorage.getItem("reminders"));
    ReminderService.reminders = reminders;
  }
}
