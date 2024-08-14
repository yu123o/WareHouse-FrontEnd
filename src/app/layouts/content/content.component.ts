import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmEventType, ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ContentComponent {
  hide: boolean = true
  constructor( public router: Router,
    private confirmationService: ConfirmationService, private messageService: MessageService) {
   
  }

  ngOnInit() {

  }
 
  LogOut() {
    
    this.confirmationService.confirm({
      message: 'Logout',
      header: 'Are you sure ?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Messages.Yes',
      rejectLabel: 'Messages.No',
      rejectVisible: false,
      accept: () => {
        this.router.navigateByUrl("")
        localStorage.removeItem("AccountID")
        localStorage.removeItem("JWT")
        localStorage.removeItem("AccountName")
        // this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: (type: any) => {

      }
    });

  }
}
