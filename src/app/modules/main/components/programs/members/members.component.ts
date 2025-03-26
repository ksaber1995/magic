import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {
  members= [
    {
      name:'سعود عبدالله الشمري', 
      job:'مهندس مدني', 
      email:'saoud94@gmail.com', 
      phoneNumber:'0540036368',
      code:'77', 
      id:'1111'
    },
    {
      name:'سعود عبدالله الشمري', 
      job:null, 
      email:'saoud94@gmail.com', 
      phoneNumber:'0540036368',
      code:'77', 
      id:'1211'
    },
    {
      name:'سعود عبدالله الشمري', 
      job:'مهندس مدني', 
      email:'saoud94@gmail.com', 
      phoneNumber:'0540036368',
      code:'77', 
      id:'1131'
    },
    {
      name:'سعود عبدالله الشمري', 
      job:'مهندس مدني', 
      email:'saoud94@gmail.com', 
      phoneNumber:'0540036368',
      code:'77', 
      id:'1141'
    },
    {
      name:'سعود عبدالله الشمري', 
      job:'مهندس مدني', 
      email:'saoud94@gmail.com', 
      phoneNumber:'0540036368',
      code:'77', 
      id:'1151'
    },
  ]

  selectedMemberIds: Set<string> = new Set();

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
