import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  faqList = [
    {
      title: 'How do I get started?',
      content:
        'You can start exploring the app by checking the main page, where you can find links to the 2 options. First, you can check the list of all the available universities, and second, you can check the list of all the available blog posts.',
    },
    {
      title: 'Is there a way to add a new university?',
      content:
        'This option is avaliable only for the admin users or you can email us at: dummyemail@gmail.com to add a new university.',
    },
    {
      title: 'Is there a way to add a new blog post?',
      content:
        'This option is avaliable only for the admin users. You can suggest a new blog post by emailing us at: dummyemail@gmail.com.',
    },
    {
      title: 'How do I find a university?',
      content:
        'On university page you can find a search bar. You can search by university name or shortcut (ex. WIUT or Westminster).',
    },
    {
      title: 'Is there a way to apply for a university?',
      content: 'This option will be avaliable soon. Stay tuned!',
    },
  ];
}
