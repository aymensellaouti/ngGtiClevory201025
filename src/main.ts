import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { LOGGER_TOKEN } from './app/injection tokens/logger.injection-token';
import { Logger2Service } from './app/services/logger2.service';
import { LoggerService } from './app/services/logger.service';
import { Logger3Service } from './app/services/logger3.service';
import { CvService } from './app/cv/services/cv.service';
import { CONSTANTES } from 'src/config/const.config';
import { FakeCvService } from './app/cv/services/fake-cv.service';
import { UUID_TOKEN } from './app/injection tokens/uuid.injection-token';
import { AuthInterceptorProvider } from './app/auth/interceptors/auth.interceptor';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ServiceWorkerModule } from '@angular/service-worker';
import { isDevMode, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideRouter, withPreloading } from '@angular/router';
import { routes } from './app/app-routing.module';
import { CustomPreloadingStrategy } from './app/preloading strategies/custom-preloading-strategy';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule added
        ReactiveFormsModule, NgxUiLoaderModule, ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
        })),
        {
            provide: LOGGER_TOKEN,
            useClass: Logger2Service,
            multi: true,
        },
        {
            provide: LOGGER_TOKEN,
            useClass: LoggerService,
            multi: true,
        },
        {
            provide: LOGGER_TOKEN,
            useClass: Logger3Service,
            multi: true,
        },
        {
            //Bech nwaferlek dependance esmha cvService
            provide: CvService,
            // la dépendance lei bech nwaferhalek welli esmha CvService
            useClass: CONSTANTES.env == 'dev' ? FakeCvService : CvService,
        },
        {
            provide: UUID_TOKEN,
            // useValue: uuidV4
            useValue: () => 'install ',
        },
        AuthInterceptorProvider,
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
        provideRouter(routes, withPreloading(CustomPreloadingStrategy))
    ]
})
  .catch(err => console.error(err));
