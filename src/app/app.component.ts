import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SITE_CONFIG, type Theme, type Culture } from './config/site.config';
import { TRANSLATIONS } from './config/translations';

@Component({ selector: 'app-root', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './app.component.html', styleUrl: './app.component.scss' })
export class AppComponent implements OnInit {
  readonly config = SITE_CONFIG;
  readonly mapEmbedUrl: SafeResourceUrl;
  isScrolled = false; menuOpen = false;
  theme: Theme = SITE_CONFIG.theme.default;
  culture: Culture = 'el';
  reservation = { name: '', email: '', phone: '', date: '', time: SITE_CONFIG.reservation.defaultTime, partySize: SITE_CONFIG.reservation.defaultPartySize, notes: '', culture: 'el' as Culture };
  isSubmitting = false; submitSuccess = false; submitError = false;
  reviews: any[] = []; reviewsLoading = false; reviewsError = false;

  constructor(private http: HttpClient, private renderer: Renderer2, private sanitizer: DomSanitizer) {
    const { lat, lng } = SITE_CONFIG.location;
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`
    );
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedCulture = localStorage.getItem('culture') as Culture;
    if (savedTheme === 'dark' || savedTheme === 'light') this.theme = savedTheme;
    if (savedCulture === 'el' || savedCulture === 'en') { this.culture = savedCulture; this.reservation.culture = savedCulture; }
    this.applyTheme(); this.loadReviews();
  }

  get t() { return TRANSLATIONS[this.culture]; }
  @HostListener('window:scroll') onScroll() { this.isScrolled = window.scrollY > 60; }
  toggleMenu() { this.menuOpen = !this.menuOpen; }
  scrollTo(id: string) { this.menuOpen = false; document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  toggleTheme() { this.theme = this.theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('theme', this.theme); this.applyTheme(); }
  toggleCulture() { this.culture = this.culture === 'el' ? 'en' : 'el'; this.reservation.culture = this.culture; localStorage.setItem('culture', this.culture); }
  applyTheme() {
    const colors = SITE_CONFIG.theme.colors[this.theme];
    const root = document.documentElement;
    (Object.keys(colors) as Array<keyof typeof colors>).forEach(key => { root.style.setProperty(`--${(key as string).replace(/([A-Z])/g, '-$1').toLowerCase()}`, colors[key]); });
    this.renderer.setAttribute(document.documentElement, 'data-theme', this.theme);
  }
  get themeIcon() { return this.theme === 'dark' ? '☀️' : '🌙'; }
  get cultureLabel() { return this.culture === 'el' ? 'EN' : 'ΕΛ'; }
  loadReviews() {
    this.reviewsLoading = true;
    this.http.get<any>(`${this.config.api.baseUrl}/SerpAPI?market=${this.config.api.market}`).subscribe({
      next: (data) => { this.reviewsLoading = false; this.reviews = (data?.reviews || []).slice(0, 6); },
      error: () => { this.reviewsLoading = false; this.reviewsError = true; }
    });
  }
  getStars(rating: number): number[] { return [1, 2, 3, 4, 5]; }
}
