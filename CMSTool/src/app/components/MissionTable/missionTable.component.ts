import { Component } from '@angular/core';
import { ServiceMaster } from '../../services/serviceMaster';
import { Mission } from '../../Models/Mission';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'mission-table',
  templateUrl: './missionTable.component.html',
})
export class MissionTableComponent {
  displayedColumns: string[] = ['child', 'name'];
  position: FormControl
  constructor(private svc: ServiceMaster) {
    this.position = new FormControl('left');
  }

  selectMission(mission: Mission) {
    this.svc.stagingMissions = [mission];
    this.svc.getReportingUnits()

  }
}
