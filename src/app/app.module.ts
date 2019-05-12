import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { GitsearchComponent } from './components/gitsearch/gitsearch.component';
import { GitrepoformComponent } from './components/gitrepoform/gitrepoform.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PipePipe } from './pipes/pipe.pipe';
import { RoutingModule } from './routing/routing.module';
import { GitrepoComponent } from './components/gitrepo/gitrepo.component';
import { GitsearchService } from './services/gitsearch.service';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    GitsearchComponent,
    GitrepoformComponent,
    NavbarComponent,
    PipePipe,
    GitrepoComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    RouterModule,

  ],
  providers: [GitsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
