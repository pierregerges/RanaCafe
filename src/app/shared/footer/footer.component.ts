import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CafeDataService } from '../../core/services/cafe-data.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly cafeData = inject(CafeDataService);
  readonly cafe = this.cafeData.cafeInfo;
  readonly year = new Date().getFullYear();
}
