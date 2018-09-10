import { NgModule, ErrorHandler } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, FormBuilder } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



import { LoginComponent } from './components/Login/login.component';
import { AppComponent } from './components/app.component';
import { MaterialModule } from './Modules/material.module';
import { ServiceMaster } from './services/serviceMaster';
import { LoginGuard } from './services/login-guard.service';
import { StagingComponent } from './components/Staging/staging.component';
import { ProfileComponent } from './components/Profile/profile.component'
import { MissionTableComponent } from './components/MissionTable/missionTable.component'
import { ReportingUnitTableComponent } from './components/ReportingUnitTable/reportingUnitTable.component'
import { TopicTableComponent } from './components/TopicTable/topicTable.component'
import { MetricTableComponent } from './components/MetricTable/metricTable.component';
import { EditMetricDialogComponent } from './components/MetricTable/edit-metric-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StagingComponent,
    ProfileComponent,
    MissionTableComponent,
    ReportingUnitTableComponent,
    TopicTableComponent,
    MetricTableComponent,
    EditMetricDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: "staging", component: StagingComponent, canActivate: [LoginGuard], data: { title: "Staging" } },
      { path: "profile", component: ProfileComponent, canActivate: [LoginGuard], data: { title: "Profile" } }

    ])
    
  ],
  providers: [
    FormBuilder,
    ServiceMaster,
    LoginGuard
  ],
  entryComponents: [
    EditMetricDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
