import { Component } from '@angular/core';

export type CardType = {
  title: string;
  svgName: string;
  desc: string;
  link: string;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  cardData: CardType[] = [
    {
      title: 'Blog Posts',
      svgName: 'blog',
      desc: 'Blog Posts is a page where you can find relavant information about universities in Uzbekistan and read about their daily activities.',
      link: '/blogs',
    },
    {
      title: 'Discover Universities',
      svgName: 'unis',
      desc: 'On this page you will be able to find all the nessacary information about university and pick the right one for your future.',
      link: '/discover',
    },
  ];
}
