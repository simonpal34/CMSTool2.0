import { NgModule, ErrorHandler, ChangeDetectorRef  } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, FormBuilder } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';



import { LoginComponent } from './components/Login/login.component';
import { AppComponent } from './components/app.component';
import { MaterialModule } from './Modules/material.module';
import { ServiceMaster } from './services/serviceMaster';
import { LoginGuard } from './services/login-guard.service';
import { StagingComponent } from './components/Staging/staging.component';
import { SourcesComponent } from './components/Sources/sources.component';
import { ExportComponent } from './components/Export/export.component';
import { ProfileComponent } from './components/Profile/profile.component'
import { MissionTableComponent } from './components/MissionTable/missionTable.component'
import { ReportingUnitTableComponent } from './components/ReportingUnitTable/reportingUnitTable.component'
import { TopicTableComponent } from './components/TopicTable/topicTable.component'
import { ExportTableComponent } from './/components/ExportTable/exportTable.component'
import { MetricTableComponent } from './components/MetricTable/metricTable.component';
import { SourceTableComponent } from './components/SourceTable/sourceTable.component';
import { ChildrenTableComponent } from './components/MetricTable/childrenTable.component';
import { EditMetricDialogComponent } from './components/MetricTable/edit-metric-dialog.component';
import { AddSourceDialogComponent } from './components/MetricTable/add-source-dialog.component';
import { MAT_DIALOG_DATA } from "@angular/material";
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    SourceTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ChartsModule,
    NgxSpinnerModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: "staging", component: StagingComponent, canActivate: [LoginGuard], data: { title: "Staging" } },
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
    AddSourceDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
