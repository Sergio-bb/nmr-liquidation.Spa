import { NgModule } from "@angular/core";
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
    FooterComponent,
    NavBarComponent,
    HeaderComponent,
    NotFoundComponent
  ],
    imports: [],
    providers: [
     
    ],
    bootstrap: [],
    schemas: [  ]
  })
  export class SharedModule { }