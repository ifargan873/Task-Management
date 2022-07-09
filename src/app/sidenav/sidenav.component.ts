import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Items,AccordingItems } from './items_link.model';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
const GRAPH_PHOTO = 'https://graph.microsoft.com/v1.0/Me/photo/$value';
 
type ProfileType = {
  givenName?: string,
  surname?: string,
  jobTitle?: string,
  id?: string
};

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  profile!: ProfileType;
  items: Items[] = [];
  accordingItem: AccordingItems[] = []

  path: string = "/assets/images/first.png";
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    localStorage
    this.getProfile();

    this.items = [
      { link: '/new', label: 'משתמשים'},
      { link: '', label: 'Office 365'}
    ]

    this.accordingItem = [
      { label: 'תהליכי עבודה', children: [
        { link:'/list', label:'תהליכים קיימים' },
        { link:'/new', label:'יצירת תהליך' } ]}
    ]
  }

  getProfile() {
    this.http.get(GRAPH_ENDPOINT)
      .subscribe(profile => {
        this.profile = profile;
      });
  }
  expanded = new Array(3).fill(false);

  toggle(open: boolean, group: number) {
    if (open) {
      // Collapse everything then open the one we want
      this.expanded = new Array(3).fill(false);
      this.expanded[group] = true;
    } else {
      this.expanded[group] = false;
    }
  }
}