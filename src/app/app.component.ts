import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'falcon-mobikes';
  constructor()  {
  
  }
}
