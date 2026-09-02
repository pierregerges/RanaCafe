import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CafeDataService } from '../../core/services/cafe-data.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private readonly cafeData = inject(CafeDataService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly cafe = this.cafeData.cafeInfo;
  readonly mapEmbedUrl: SafeResourceUrl;

  constructor() {
    const c = this.cafe();
    const query = encodeURIComponent(`${c.address}, ${c.city}, ${c.state} ${c.zip}`);
    const url = `https://www.google.com/maps?q=${query}&output=embed`;
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
