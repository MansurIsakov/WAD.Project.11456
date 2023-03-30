import { Component } from '@angular/core';
import { CardType } from '../main/main.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  cardData: CardType[] = [
    {
      title: 'Create, Edit, Delete  Posts',
      svgName: 'blog',
      desc: 'As an admin you can create, edit and delete blog posts.',
      link: '/admin/blogs',
    },
    {
      title: 'Create, Edit, Delete Universities',
      svgName: 'unis',
      desc: 'As an admin you can create, edit and delete universities.',
      link: '/admin/universities',
    },
  ];
}
