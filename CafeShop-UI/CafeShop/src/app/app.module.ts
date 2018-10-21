import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FrontdeskComponent } from 'src/components/frontdesk/frontdesk.component';
import { TableDetailComponent } from 'src/components/table-detail/table-detail.component';
import { appRoutes } from './app.routers';
import {
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule} from '@angular/material';
import { HomeScreenComponent } from 'src/screens/home-screen/home-screen.component';
import { RouterModule } from '@angular/router';
import { HistoryScreenComponent } from 'src/screens/history-screen/history-screen.component';
import { UserManagementScreenComponent } from 'src/screens/user-management-screen/user-management-screen.component';
import { AddNewEmployeeComponent } from 'src/components/add-new-employee/add-new-employee.component';
import { EditNewEmployeeComponent } from 'src/components/edit-new-employee/edit-new-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontdeskComponent,
    TableDetailComponent,
    HomeScreenComponent,
    HistoryScreenComponent,
    UserManagementScreenComponent,
    AddNewEmployeeComponent,
    EditNewEmployeeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
