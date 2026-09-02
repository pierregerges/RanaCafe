import { Injectable, signal } from '@angular/core';
import { CafeInfo, MenuItem, Review, RatingSource } from '../models/cafe.model';

@Injectable({ providedIn: 'root' })
export class CafeDataService {
  private readonly cafeInfoSignal = signal<CafeInfo>({
    name: 'RanaCafe',
    tagline: 'Coffee, cake, and a little bit of home.',
    neighborhood: 'Gunston Plaza, Lorton',
    address: '7756 Gunston Plaza',
    city: 'Lorton',
    state: 'VA',
    zip: '22079',
    phone: '(703) 718-3041',
    altPhone: '(703) 303-0250',
    email: 'ranacafe99@gmail.com',
    facebookUrl: 'https://www.facebook.com/people/RanaCafe/100076348324477/',
    mapsUrl: 'https://maps.google.com/?q=7756+Gunston+Plaza,+Lorton,+VA+22079',
    story:
      "RanaCafe is a family-run bakery and coffee bar tucked into Gunston Plaza in Lorton, Virginia. What started as a small pastry counter has grown into a neighborhood gathering spot, known for hand-built cakes, Middle Eastern sweets like baklava and basbosa, and a coffee bar that runs from a quick espresso to a slow cardamom-spiced Turkish coffee. Everything in the case is baked and decorated in house, including custom vegan and dairy cakes made to order.",
    hours: [
      { day: 'Monday', hours: '7:30 AM – 8:00 PM' },
      { day: 'Tuesday', hours: '7:30 AM – 8:00 PM' },
      { day: 'Wednesday', hours: '7:30 AM – 8:00 PM' },
      { day: 'Thursday', hours: '7:30 AM – 8:00 PM' },
      { day: 'Friday', hours: '7:30 AM – 9:00 PM' },
      { day: 'Saturday', hours: '7:30 AM – 9:00 PM' },
      { day: 'Sunday', hours: 'Closed' },
    ],
  });

  private readonly menuItemsSignal = signal<MenuItem[]>([
    {
      name: 'Cardamom Turkish Coffee',
      description: 'Slow-brewed and fragrant, served the traditional way — not too bitter, full of flavor.',
      category: 'coffee',
      emoji: '☕',
    },
    {
      name: 'Iced Latte',
      description: 'A balanced, smooth espresso drink, one of the most-ordered items at the counter.',
      category: 'coffee',
      emoji: '🧊',
    },
    {
      name: 'Mocha Frappe',
      description: 'Blended cold and chocolatey — a regular pick for warm afternoons in the plaza.',
      category: 'coffee',
      emoji: '🥤',
    },
    {
      name: 'Nutella Pistachio Croissant',
      description: 'A generously filled, flaky croissant that regulars call out by name.',
      category: 'pastry',
      emoji: '🥐',
    },
    {
      name: 'Fruit Tart',
      description: 'A crisp pastry shell with pastry cream and fresh fruit, built fresh each morning.',
      category: 'pastry',
      emoji: '🍓',
    },
    {
      name: 'Bread Pudding',
      description: 'Warm, dense, and comforting — a case favorite alongside the rice pudding.',
      category: 'pastry',
      emoji: '🍞',
    },
    {
      name: 'Mil Hojas (Napoleon Cake)',
      description: 'Golden pastry layers and silky vanilla custard, finished with a delicate glaze.',
      category: 'cake',
      emoji: '🍰',
    },
    {
      name: 'Mango Mousse Cake',
      description: "One of the case's most photographed slices — light, fruity, and finished to order.",
      category: 'cake',
      emoji: '🥭',
    },
    {
      name: 'Custom Celebration Cakes',
      description: 'Hand-decorated cakes built to order, with vegan and dairy options available.',
      category: 'cake',
      emoji: '🎂',
    },
    {
      name: 'Baklava',
      description: 'Flaky, layered, and not overly sweet — a top pick from the Middle Eastern sweets case.',
      category: 'sweet',
      emoji: '🍯',
    },
    {
      name: 'Basbosa',
      description: 'A traditional semolina cake soaked in syrup, rich and dense in the best way.',
      category: 'sweet',
      emoji: '🍮',
    },
    {
      name: 'Kunafa',
      description: 'Served in both Egyptian and Turkish styles — a rare find to have both in one case.',
      category: 'sweet',
      emoji: '🧡',
    },
  ]);

  private readonly reviewsSignal = signal<Review[]>([
    {
      name: 'K.M.',
      rating: 5,
      date: 'March 2023',
      source: 'Yelp',
      quote:
        "Warm and welcoming from the moment I walked in. I came for sweets, not coffee, and left happy — they even had vegan options that didn't feel like an afterthought.",
    },
    {
      name: 'A reviewer',
      rating: 5,
      date: '2026',
      source: 'Google',
      quote:
        "The Mil Hojas completely won me over — flaky layers, silky custard, not too sweet. It's the kind of dessert you end up ordering extra of to bring home.",
    },
    {
      name: 'A reviewer',
      rating: 5,
      date: '2026',
      source: 'Google',
      quote:
        'The owners were kind and welcoming from the start. Between the balanced latte and a genuinely excellent Turkish coffee, this little shop is worth going out of your way for.',
    },
    {
      name: 'Suriya E.',
      rating: 4,
      date: 'July 2025',
      source: 'Yelp',
      quote:
        'Has that classic small, independent coffee-shop feeling — nothing flashy, just clean, comfortable, and easy to settle into for a while.',
    },
    {
      name: 'Nou Nou S.',
      rating: 3,
      date: 'January 2026',
      source: 'Yelp',
      quote:
        'Stopped in after dinner nearby for pastries, cake slices, baklava, and cake pops. Results were a bit mixed for me, though the variety on offer was impressive.',
    },
    {
      name: 'xam',
      rating: 3,
      date: '2026',
      source: 'Google',
      quote:
        'Quick, friendly service in a clean, cute space. My coffee had an odd, slightly stale note that visit, though the staff themselves were great.',
    },
    {
      name: 'A regular',
      rating: 5,
      date: '2023',
      source: 'Restaurantji',
      quote:
        "The owner Rana runs a genuinely thoughtful, welcoming shop. It's a relief to get real Middle Eastern sweets nearby without a long drive.",
    },
    {
      name: 'A Yelp reviewer',
      rating: 5,
      date: '2025',
      source: 'Yelp',
      quote:
        'Loved the counter seating for people-watching while sipping coffee — the Nutella pistachio croissant I ordered was huge and delicious.',
    },
    {
      name: 'A Yelp reviewer',
      rating: 5,
      date: '2025',
      source: 'Yelp',
      quote:
        "Asked about vegan options and staff actually called the owner to confirm before serving me — that kind of care is rare. The baklava and fruit tarts didn't disappoint either.",
    },
  ]);

  private readonly ratingSourcesSignal = signal<RatingSource[]>([
    { source: 'Google', rating: 4.5, count: 90 },
    { source: 'Yelp', rating: 4.4, count: 37 },
    { source: 'Facebook', rating: 5.0, count: 1 },
  ]);

  readonly cafeInfo = this.cafeInfoSignal.asReadonly();
  readonly menuItems = this.menuItemsSignal.asReadonly();
  readonly reviews = this.reviewsSignal.asReadonly();
  readonly ratingSources = this.ratingSourcesSignal.asReadonly();

  featuredItems(): MenuItem[] {
    return this.menuItemsSignal().filter((item) =>
      ['Cardamom Turkish Coffee', 'Nutella Pistachio Croissant', 'Mango Mousse Cake', 'Baklava'].includes(item.name)
    );
  }

  overallRating(): number {
    const sources = this.ratingSourcesSignal();
    const weighted = sources.reduce((sum, s) => sum + s.rating * s.count, 0);
    const totalCount = sources.reduce((sum, s) => sum + s.count, 0);
    return Math.round((weighted / totalCount) * 10) / 10;
  }

  totalReviewCount(): number {
    return this.ratingSourcesSignal().reduce((sum, s) => sum + s.count, 0);
  }
}
