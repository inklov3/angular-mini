import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'back-top',
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.scss']
})
export class BackTopComponent {
  isShow: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show/hide the button based on scroll position
    this.isShow = window.scrollY > 200;
  }

  scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
