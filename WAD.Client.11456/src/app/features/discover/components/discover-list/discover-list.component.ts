import { Component } from '@angular/core';

@Component({
  selector: 'app-discover-list',
  templateUrl: './discover-list.component.html',
  styleUrls: ['./discover-list.component.scss'],
})
export class DiscoverListComponent {
  universitiesList: any[] = [
    {
      name: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      image:
        'https://www.berkeley.edu/sites/default/files/styles/ucb_4_3/public/ucb-berkeley-panoramic.jpg?itok=Z8Q8Z7ZJ',
      description:
        'The University of California, Berkeley, is a public research university located in Berkeley, California. Berkeley has been ranked among the top 20 universities in the world by several international university rankings, and is also consistently ranked as the top public university in the United States.',
      link: 'https://www.berkeley.edu/',
    },
    {
      name: 'University of California, Los Angeles',
      location: 'Los Angeles, CA',
      image:
        'https://www.ucla.edu/sites/default/files/styles/ucb_4_3/public/ucla-campus-panoramic.jpg?itok=Z8Q8Z7ZJ',
      description:
        'The University of California, Los Angeles, is a public research university located in the Westwood district of Los Angeles, California. It became the Southern Branch of the University of California in 1919 and achieved full autonomy in 1920.',
      link: 'https://www.ucla.edu/',
    },
    {
      name: 'University of California, San Diego',
      location: 'San Diego, CA',
      image:
        'https://www.ucsd.edu/sites/default/files/styles/ucb_4_3/public/ucsd-campus-panoramic.jpg?itok=Z8Q8Z7ZJ',
      description:
        'The University of California, San Diego, is a public research university located in the La Jolla neighborhood of San Diego, California, in the United States. The university occupies 2,141 acres near the coast of the Pacific Ocean with the main campus resting on approximately 1,152 acres.',
      link: 'https://www.ucsd.edu/',
    },
    {
      name: 'University of California, Irvine',
      location: 'Irvine, CA',
      image:
        'https://www.uci.edu/sites/default/files/styles/ucb_4_3/public/uci-campus-panoramic.jpg?itok=Z8Q8Z7ZJ',
      description:
        'The University of California, Irvine, is a public research university located in Irvine, California. It is one of the 10 campuses of the University of California system and is the youngest member, having opened in 1965.',
      link: 'https://www.uci.edu/',
    },
    {
      name: 'University of California, Davis',
      location: 'Davis, CA',
      image:
        'https://www.ucdavis.edu/sites/default/files/styles/ucb_4_3/public/ucd-campus-panoramic.jpg?itok=Z8Q8Z7ZJ',
      description:
        'The University of California, Davis, is a public research university and land-grant university adjacent to Davis, California. The university is one of the 10 general campuses of the University of California system.',
      link: 'https://www.ucdavis.edu/',
    },
    {
      name: 'University of California, Santa Barbara',
      location: 'Santa Barbara, CA',
      image:
        'https://www.ucsb.edu/sites/default/files/styles/ucb_4_3/public/ucsb-campus-panoramic.jpg?itok=Z8Q8Z7ZJ',
      description:
        'The University of California, Santa Barbara, is a public research university and one of the 10 campuses of the University of California system. The main campus is located on a 1,022-acre site near Goleta, California, 8 miles west of Santa Barbara.',
      link: 'https://www.ucsb.edu/',
    },
    {
      name: 'University of California, Riverside',
      location: 'Riverside, CA',
      image:
        'https://www.ucr.edu/sites/default/files/styles/ucb_4_3/public/ucr-campus-panoramic.jpg?itok=Z8Q8Z7ZJ',
      description:
        'The University of California, Riverside, is a public research university and one of the 10 general campuses of the University of California system. The main campus sits on 1,900 acres in a suburban district of Riverside, California, about 60 miles east of Los Angeles.',
      link: 'https://www.ucr.edu/',
    },
    {
      name: 'University of California, Riverside',
      location: 'Riverside, CA',
      image:
        'https://www.ucr.edu/sites/default/files/styles/ucb_4_3/public/ucr-campus-panoramic.jpg?itok=Z8Q8Z7ZJ',
      description:
        'The University of California, Riverside, is a public research university and one of the 10 general campuses of the University of California system. The main campus sits on 1,900 acres in a suburban district of Riverside, California, about 60 miles east of Los Angeles.',
      link: 'https://www.ucr.edu/',
    },
    {
      name: 'University of California, Riverside',
      location: 'Riverside, CA',
      image:
        'https://www.ucr.edu/sites/default/files/styles/ucb_4_3/public/ucr-campus-panoramic.jpg?itok=Z8Q8Z7ZJ',
      description:
        'The University of California, Riverside, is a public research university and one of the 10 general campuses of the University of California system. The main campus sits on 1,900 acres in a suburban district of Riverside, California, about 60 miles east of Los Angeles.',
      link: 'https://www.ucr.edu/',
    },
  ];
}
