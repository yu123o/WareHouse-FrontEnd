import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { API } from 'src/app/Cors/enums/API/api';
import { WareHouse } from 'src/app/Cors/Models/WareHouse';
import { GenericServiceService } from 'src/app/Cors/Service/generic-service.service';

@Component({
  selector: 'app-search-ware-houses',
  templateUrl: './search-ware-houses.component.html',
  styleUrls: ['./search-ware-houses.component.css']
})

export class SearchWareHousesComponent {
  wareHouses!: WareHouse[];
  wareHouseRequest: WareHouse = new WareHouse()
  selectedWarehouse!: WareHouse[];
  constructor(private genericService: GenericServiceService, public router: Router) { }

  cols!: Column[];

  exportColumns!: ExportColumn[];

  ngOnInit() {

    this.ReturnWareHouses()

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },

    ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }

  ReturnWareHouses() {
    this.wareHouseRequest.createdBy = Number(localStorage.getItem('id'))
    this.genericService.Services(this.wareHouseRequest, API.GetWarehouses).subscribe((data: WareHouse[]) => {
      if (data.length) {
        this.wareHouses = data

      }
      // else this.messageService.add({ severity: 'error', detail: "LoginFailed" })
    })
  }
  Add(){
    this.router.navigateByUrl("/Systems/ADDWareHouses")
  }
  Delete(){
  }
}
interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}