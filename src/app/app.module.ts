import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    LayoutModule,
    MatGridListModule,MatCardModule,MatIconModule,
    MatDividerModule, 
    MatInputModule,
    MatSelectModule,
    // MatFormFieldModule,
    // MatButtonModule,
    //  MatRadioModule,
    //  MatCheckboxModule,
    // MatMenuModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
