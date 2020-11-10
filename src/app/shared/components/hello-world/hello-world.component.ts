import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HelloNameService } from '../../../common/services/hello-name.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HelloWorldComponent implements OnInit {
  name: string;

  constructor(
    private service: HelloNameService
  ) { }

  ngOnInit(): void {
    this.name = this.service.name;
  }

}
