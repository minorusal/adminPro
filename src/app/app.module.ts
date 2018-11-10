import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';

// Temporal

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Servicios

import { ServiceModule } from './services/service.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// import { MedicoComponent } from './pages/medicos/medico.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    // MedicoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  providers: [ServiceModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
