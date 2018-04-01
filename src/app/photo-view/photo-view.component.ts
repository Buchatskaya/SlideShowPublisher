import {Component, enableProdMode} from '@angular/core';
import {PhotoViewService} from '../photo-view.service';
import {Home} from '../home';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.css'],
})
export class PhotoViewComponent {
  homes: Home[];

  constructor(service: PhotoViewService) {
    this.homes = service.getHomes();
  }
}
