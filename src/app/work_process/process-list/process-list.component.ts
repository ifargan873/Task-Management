import { Component, OnInit } from '@angular/core';

export interface Contract {
  Id: string;
  Name: string;
}

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.css']
})

export class ProcessListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contracts: Array<Contract> = [
    { 
      Id: '1',
      Name: 'רישום קרקע בטאבו'
    },
    { 
      Id: '2',
      Name: 'רישום קרקע בטאבו 2'
    },
    { 
      Id: '3',
      Name: '3 רישום קרקע בטאבו'
    },
    { 
      Id: '4',
      Name: 'רישום קרקע בטאבו 4'
    },{ 
      Id: '3',
      Name: '3 רישום קרקע בטאבו'
    },
    { 
      Id: '4',
      Name: 'רישום קרקע בטאבו 4'
    }
  ];
}
