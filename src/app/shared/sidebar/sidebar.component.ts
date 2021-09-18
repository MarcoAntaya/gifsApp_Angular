import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  

  // heroes: string[] = ['Papa', 'Mama'];
  
  constructor( private gifsService : GifsService) {
    
  }
  
  
  get historial() {
      return this.gifsService.historial
      
  }
}
