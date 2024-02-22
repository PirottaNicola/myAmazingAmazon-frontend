import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule) // This is the entry point of the application, it bootstraps the AppModule
  .catch((err) => console.error(err)); // If there is an error, it will be logged to the console
