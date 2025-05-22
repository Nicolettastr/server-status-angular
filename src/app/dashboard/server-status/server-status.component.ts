import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
// forces the class to have certain shape, helps when theres an error (typo) on the ngOnInit funciton
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

  //   When working with Signal effects, you sometimes might need to perform some cleanup work before the effect function runs again (e.g., to clear some timer or something like that).

  // Angular's effect() allows you to do that!

  // It does provide you with an onCleanup hook which you can execute as part of your effect function to define what should happen before the effect code runs the next time:

  // effect((onCleanup) => {
  //   const tasks = getTasks();
  //   const timer = setTimeout(() => {
  //     console.log(`Current number of tasks: ${tasks().length}`);
  //   }, 1000);
  //   onCleanup(() => {
  //     clearTimeout(timer);
  //   });
  // });
  // private interval?: ReturnType<typeof setTimeout>;
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const interval = setTimeout(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 2000);
    //new version
    this.destroyRef.onDestroy(() => {
      clearTimeout(interval);
    });
  }

  ngAfterViewInit() {}

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
