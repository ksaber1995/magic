import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../../../../../model/member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent implements OnInit {
  members : Member[] = []

  breadcrumbs = [
    {
      label:'البرامج',
      url:''
    },

    {
      label:'البرامج',
      url:''
    },
    {
      label:'اعضاء اللحنة ',
    },
  ]
  id: string;
  selectedMemberIds: Set<string> = new Set();

  constructor(
    private swagger : SwaggerService, 
    private route : ActivatedRoute
  ){

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.swagger.getOneProject(this.id).subscribe((res:any)=>{
      this.members = res.data.members
      console.log(this.members)
    })
  }

  showDetails(memberId: string): void {
    if (this.selectedMemberIds.has(memberId)) {
      this.selectedMemberIds.delete(memberId); // Hide details if already shown
    } else {
      this.selectedMemberIds.add(memberId); // Show details
    }
  }
  deleteMember(member){
    
  }
}
