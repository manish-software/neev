import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/core/meta.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit, AfterViewInit {




  constructor(
    private route: ActivatedRoute,
    private metaService: MetaService // public breakpointObserver: BreakpointObserver, // public mediaMatcher: MediaMatcher
  ) { }

  ngOnInit(): void {
    this.metaService.setPageMata(
      'Neev: Make your NGO Digital',
      'Neev is a digital platform for NGOs that provide customized tools and apps that capture data in real-time, help map it, deliver "on the go" analytics, and provide beneficiaries with speedy resolution of problems.',
      'https://res.cloudinary.com/manish-software/image/upload/v1652281742/neev/neev-ngo-software_iwdpet.jpg'
    );
    // this.mediaObservar = this.breakpointObserver.observe([
    //   Breakpoints.Small,
    //   Breakpoints.HandsetPortrait,
    // ]);
  }

  ngAfterViewInit() {
    this.route.queryParamMap.subscribe((i: any) => {
      if (i.params.id) {
        this.scrollToElement(i.params.id);
      }
    });
  }

  scrollToElement(id: string): void {
    return document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
