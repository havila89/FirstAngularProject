import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //import this library to routing to particular pages
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NewPipePipe } from './new-pipe.pipe';
import { MatCardModule } from '@angular/material/card';
import { BreedCommonComponent } from './breed-common/breed-common.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NewPipePipe,
    BreedCommonComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },

      // otherwise redirect to home

      { path: '**', redirectTo: '' },
    ]),
    BrowserAnimationsModule, // created a unique path/ address for comp to reflect on my home page(forroot can be written in single file in whole application)
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
