import { NgModule, ErrorHandler, ChangeDetectorRef  } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';



import { LoginComponent } from './components/Login/login.component';
import { AppComponent } from './components/app.component';
import { MaterialModule } from './Modules/material.module';
import { ServiceMaster } from './services/serviceMaster';
import { LoginGuard } from './services/login-guard.service';
import { HomeComponent } from './components/Home/home.component';
import { StagingComponent } from './components/Staging/staging.component';
import { UploadFileComponent } from './components/UploadFile/uploadFile.component';
import { SourcesComponent } from './components/Sources/sources.component';
import { ExportComponent } from './components/Export/export.component';
import { ProfileComponent } from './components/Profile/profile.component'
import { MissionTableComponent } from './components/MissionTable/missionTable.component';
import { FileTableComponent } from './components/FileTable/fileTable.component';
import { ReportingUnitTableComponent } from './components/ReportingUnitTable/reportingUnitTable.component'
import { TopicTableComponent } from './components/TopicTable/topicTable.component'
import { ExportTableComponent } from './/components/ExportTable/exportTable.component'
import { MetricTableComponent } from './components/MetricTable/metricTable.component';
import { SourceTableComponent } from './components/SourceTable/sourceTable.component';
import { ChildrenTableComponent } from './components/MetricTable/childrenTable.component';
import { EditMetricDialogComponent } from './components/MetricTable/edit-metric-dialog.component';
import { AddSourceDialogComponent } from './components/MetricTable/add-source-dialog.component';
import { AddMetaDataDialogComponent } from './components/MetricTable/add-meta-data-dialog .component';
import { EditSourceDialogComponent } from './components/SourceTable/edit-source-dialog.component';
import { TimeOutDialogComponent } from './components/TimeOut/time-out-dialog.component';
import { MAT_DIALOG_DATA } from "@angular/material";
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ng6-toastr-notifications';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StagingComponent,
    ExportComponent,
    ProfileComponent,
    MissionTableComponent,
    ReportingUnitTableComponent,
    TopicTableComponent,
    ExportTableComponent,
    MetricTableComponent,
    EditMetricDialogComponent,
    ChildrenTableComponent,
    AddSourceDialogComponent,
    SourcesComponent,
    SourceTableComponent,
    EditSourceDialogComponent,
    UploadFileComponent,
    FileTableComponent,
    AddMetaDataDialogComponent,
    TimeOutDialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ChartsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: "home", component: HomeComponent, canActivate: [LoginGuard], data: { title: "Home" } },
      { path: "staging", component: StagingComponent, canActivate: [LoginGuard], data: { title: "Staging" } },
      { path: "uploadFile", component: UploadFileComponent , canActivate: [LoginGuard], data: { title: "UploadFile" } },
      { path: "sources", component: SourcesComponent, canActivate: [LoginGuard], data: { title: "Sources" } },
      { path: "export", component: ExportComponent, canActivate: [LoginGuard], data: { title: "Export" } },
      { path: "profile", component: ProfileComponent, canActivate: [LoginGuard], data: { title: "Profile" } }

    ])
    
  ],
  providers: [
    FormBuilder,
    ServiceMaster,
    LoginGuard,
    {
      provide: MAT_DIALOG_DATA,
      useValue: {} // Add any data you wish to test if it is passed/used correctly
    }
  ],
  entryComponents: [
    EditMetricDialogComponent,
    AddSourceDialogComponent,
    EditSourceDialogComponent,
    AddMetaDataDialogComponent,
    TimeOutDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
