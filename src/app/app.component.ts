import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/user', 'johnpapa'], { replaceUrl: true });
  }
}
