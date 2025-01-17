import { Component, Input } from '@angular/core';
import { RepositoryType } from '../../../user-type';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-view-panel',
  templateUrl: './view-panel.component.html',
  styleUrls: ['./view-panel.component.scss'],
})
export class ViewPanelComponent {
  @Input() repo: RepositoryType = {} as RepositoryType;
}
