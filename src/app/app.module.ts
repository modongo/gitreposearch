import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GitsearchComponent } from './components/gitsearch/gitsearch.component';
import { GitrepoformComponent } from './components/gitrepoform/gitrepoform.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PipePipe } from './pipes/pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GitsearchComponent,
    GitrepoformComponent,
    NavbarComponent,
    PipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
