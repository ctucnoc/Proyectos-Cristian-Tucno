import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { ConverStringToBooleanPipe } from './pipes/conver-string-to-boolean.pipe';
import { ConverBooleanToStringPipe } from './shared/pipes/conver-boolean-to-string.pipe';
import { ConverCharToStringPipe } from './shared/pipes/conver-char-to-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    ConverStringToBooleanPipe,
    ConverBooleanToStringPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
