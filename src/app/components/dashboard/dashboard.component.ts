import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ColDef, SideBarDef } from 'ag-grid-community';
import { Constants } from 'src/app/helper/constants';
import { DashboardService } from 'src/app/services/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  availableBalance: Number =5126;
  completedTest: Number =314;
  inProgressTest: Number =212;
  pendingTest: Number =36;
  dashboardTitle?: string = Constants.dashboardTitle;
  public sideBar: SideBarDef | string | boolean | null = 'filters';
  selected = new FormControl(4);
  constructor(private router: Router,
          private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    filter: true,
    resizable: true,
  };
  public columnDefs: ColDef[] = [
    { field: 'Date' , filter: 'agDateColumnFilter'},
    { field: 'Bookings' , sortable: true, filter: 'agTextColumnFilter'},
    { field: 'Samples' , sortable: true},
    { field: 'Recieved' , sortable: true},
    { field: 'Pending' , sortable: true},
    { field: 'Rejected' , sortable: true},
    { field: 'Tests' , sortable: true},
    { field: 'Amount' , sortable: true, filter: 'agNumberColumnFilter'}
];

public rowData = [
    { Date: '23/03/2022', Bookings: '122', Samples: '125', Recieved :'105', Pending:'17', Rejected:'0', Tests:'130',Amount:12200},
    { Date: '22/03/2022', Bookings: '140', Samples: '140', Recieved :'130', Pending:'10', Rejected:'0', Tests:'130',Amount:15400},
    { Date: '21/03/2022', Bookings: '110', Samples: '118', Recieved :'106', Pending:'4', Rejected:'3', Tests:'130',Amount:11300},
    { Date: '20/03/2022', Bookings: '130', Samples: '132', Recieved :'132', Pending:'0', Rejected:'0', Tests:'130',Amount:17004},
    { Date: '19/03/2022', Bookings: '200', Samples: '210', Recieved :'200', Pending:'0', Rejected:'0', Tests:'130',Amount:21340},
    { Date: '23/03/2022', Bookings: '122', Samples: '125', Recieved :'105', Pending:'17', Rejected:'0', Tests:'130',Amount:12200},
    { Date: '22/03/2022', Bookings: '140', Samples: '140', Recieved :'130', Pending:'10', Rejected:'0', Tests:'130',Amount:15400},
    { Date: '21/03/2022', Bookings: '110', Samples: '118', Recieved :'106', Pending:'4', Rejected:'3', Tests:'130',Amount:11300},
    { Date: '20/03/2022', Bookings: '130', Samples: '132', Recieved :'132', Pending:'0', Rejected:'0', Tests:'130',Amount:17004},
    { Date: '19/03/2022', Bookings: '200', Samples: '210', Recieved :'200', Pending:'0', Rejected:'0', Tests:'130',Amount:21340}
];

public navigateToPage() :void {
  this.router.navigateByUrl('/order');
}

public navigateToTab(tabNumber: number): void {
  console.log(tabNumber);
  this.dashboardService.setTabNumber(tabNumber);
  this.router.navigateByUrl('/order');
}

}
