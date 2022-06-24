import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  private tabNumber: number =0;

    public getTabNumber(): number {
        return this.tabNumber;
    }
    
    public setTabNumber(tabNumber: number) {
        this.tabNumber = tabNumber;
    }
}
