import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

import { counterReducer } from './app/store/counter.reducer';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({
      counter: counterReducer,
    }),
  ],
});
