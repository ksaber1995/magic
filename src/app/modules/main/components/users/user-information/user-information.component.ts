import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../../model/user';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss'
})
export class UserInformationComponent implements OnInit {
  user : User 
  id: string;
  constructor(
    private swagger : SwaggerService, 
    private route : ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.swagger.getOneUser(this.id).subscribe((res:any) => {
      this.user  = res.data
      console.log(this.user)
    })
  }
}
