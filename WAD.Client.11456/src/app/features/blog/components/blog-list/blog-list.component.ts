import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  blogPosts = [
    {
      title: 'How to get into a top university',
      author: {
        name: 'John Doe',
        role: 'Contributor',
      },
      date: '2020-01-01',
      thesis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet libero, eget aliquam nunc nisl eget nunc. Sed euismod, nunc vel bla bla',
    },
    {
      title: 'How to get into a top university',
      author: {
        name: 'John Doe',
        role: 'Contributor',
      },
      date: '2020-01-01',
      thesis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet libero, eget aliquam nunc nisl eget nunc. Sed euismod, nunc vel bla bla',
    },
    {
      title: 'How to get into a top university',
      author: {
        name: 'John Doe',
        role: 'Contributor',
      },
      date: '2020-01-01',
      thesis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet libero, eget aliquam nunc nisl eget nunc. Sed euismod, nunc vel bla bla',
    },
    {
      title: 'How to get into a top university',
      author: {
        name: 'John Doe',
        role: 'Contributor',
      },
      date: '2020-01-01',
      thesis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet libero, eget aliquam nunc nisl eget nunc. Sed euismod, nunc vel bla bla',
    },
    {
      title: 'How to get into a top university',
      author: {
        name: 'John Doe',
        role: 'Contributor',
      },
      date: '2020-01-01',
      thesis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet libero, eget aliquam nunc nisl eget nunc. Sed euismod, nunc vel bla bla',
    },
  ];
}
