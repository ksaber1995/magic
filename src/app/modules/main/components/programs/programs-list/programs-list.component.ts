import { Component } from '@angular/core';


const program = [{
  title: 'ادارة النفايات الصلبة',

}]

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrl: './programs-list.component.scss'
})

export class ProgramsListComponent {
  programs = new Array(30).fill(program)
}
