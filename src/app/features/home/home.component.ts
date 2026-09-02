import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CafeDataService } from '../../core/services/cafe-data.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly cafeData = inject(CafeDataService);

  readonly cafe = this.cafeData.cafeInfo;
  readonly featured = this.cafeData.featuredItems();
  readonly overallRating = this.cafeData.overallRating();
  readonly totalReviews = this.cafeData.totalReviewCount();
  readonly reviews = this.cafeData.reviews().slice(0, 2);
}
