import { Component, OnInit } from '@angular/core';
import { ClientData } from 'src/app/api/client-data';
import { ApiService } from 'src/app/api/Api.service';
import { UntilDestroy, untilDestroyed} from '@ngneat/until-destroy'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:ClientData[]=[];
  displayedColumns: string[] = ['name', 'lastname', 'email'];
  clickedRows = new Set<ClientData[]>();

  constructor(private api:ApiService) {
    this.api.getClients().pipe().subscribe(x=>{this.clients=x;console.log(this.clients)})
   }

  ngOnInit() {
  }

}
