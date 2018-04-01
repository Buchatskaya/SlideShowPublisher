import {Injectable} from '@angular/core';

import {Home} from './home';
import {HOMES} from './mock-homes';

@Injectable()
export class PhotoViewService {
  getHomes(): Home[] {
    return HOMES;
  }
}
