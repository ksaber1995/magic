import { Component, Input } from '@angular/core';
import { SideBarItem } from '../sidebar.component';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss'
})
export class SidebarItemComponent {
  @Input() item : SideBarItem;
  @Input() background = '#9d9d9d';
  showChildrenItemsToggle(item: SideBarItem) {
    item.showChildren = !item.showChildren;
  }
}
