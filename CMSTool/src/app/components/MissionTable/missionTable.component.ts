import { Component } from '@angular/core';
import { ServiceMaster } from '../../services/serviceMaster';
import { Mission } from '../../Models/Mission';


@Component({
  selector: 'mission-table',
  templateUrl: './missionTable.component.html',
})
export class MissionTableComponent {
  displayedColumns: string[] = ['child','name'];
  constructor(private svc: ServiceMaster) {
    
  }

  selectMission(mission: Mission) {
    this.svc.stagingMissions = [mission];
    this.svc.getReportingUnits()

  }
}
