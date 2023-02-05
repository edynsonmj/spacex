import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RocketlistComponent } from './rocketlist/rocketlist.component';
import { RocketComponent } from './rocket/rocket.component';
import { ManageComponent } from './manage/manage.component';
import { RocketService } from './service/rocket.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ManageEditComponent } from './manage-edit/manage-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RocketlistComponent,
    RocketComponent,
    ManageComponent,
    ManageEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
