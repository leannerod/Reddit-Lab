import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from './app-routing.module';
import { TimestampPipe } from './pipe/timestamp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PostComponent,
    TimestampPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
