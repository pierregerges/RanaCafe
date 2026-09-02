import { Component, inject } from '@angular/core';
import { CafeDataService } from '../../core/services/cafe-data.service';

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  private readonly cafeData = inject(CafeDataService);

  readonly reviews = this.cafeData.reviews;
  readonly ratingSources = this.cafeData.ratingSources;
  readonly overallRating = this.cafeData.overallRating();
  readonly totalReviews = this.cafeData.totalReviewCount();

  readonly stars = [1, 2, 3, 4, 5];
}
