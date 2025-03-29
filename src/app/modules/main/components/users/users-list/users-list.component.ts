import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { User } from '../../../../../../model/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  // TODO, Ahmed اللجان المنتسب لها
  breadcrumbs = [
    {
      label: ' قائمة المستخدمين',
    },
  ];
  constructor(private router: Router, private swagger: SwaggerService) {}

  ngOnInit(): void {
    this.swagger.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  userDetails(id: string) {
    this.router.navigate(['main/users/', id]);
  }
}
