import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title="task"
}