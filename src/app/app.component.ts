import { Component, OnInit} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Tasks Management';
  isIframe = false;

  constructor(
    private matIconRegistry:MatIconRegistry,
    private domSanitzer:DomSanitizer,
  ){
    this.matIconRegistry.addSvgIcon(
      'office',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/office-365.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'workflow',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/workflow.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'users',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/users.svg')
    );
  }

  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;
  }
}