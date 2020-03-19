import { Injectable } from '@angular/core';
import { UserNotificationModel } from './user-notification.model';

@Injectable()
export class UserNotificationService {
  private notifications: UserNotificationModel[];

  constructor() {
    this.notifications = [
      {
        id: '1',
        title: 'angular 6 Framwork',
        lastTime: '23 Modules',
        state: '1'
      },
      {
        id: '2',
        title: 'angular 4 Framwork',
        lastTime: '23 Modules',
        state: 'state'
      },
      {
        id: '3',
        title: 'react 16 Framwork',
        lastTime: '23 Modules',
        state: 'state'
      },
      {
        id: '4',
        title: 'angularJs Framwork ',
        lastTime: '23 Module',
        state: 'state'
      },
      {
        id: '5',
        title: 'Angular Meterial',
        lastTime: '23 Module',
        state: 'state'
      }
    ];
  }

  select(): UserNotificationModel[] {
    return this.notifications;
  }

  delete(notification): UserNotificationModel[] {
    const i = this.notifications.indexOf(notification);
    this.notifications = [
      ...this.notifications.slice(0, i),
      ...this.notifications.slice(i + 1)
    ];

    return this.notifications;
  }
}
