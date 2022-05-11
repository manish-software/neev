import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './pages/landing/landing.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { environment } from 'src/environments/environment';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import {
//   getAnalytics,
//   provideAnalytics,
//   ScreenTrackingService,
// } from '@angular/fire/analytics';
// import { getPerformance, providePerformance } from '@angular/fire/performance';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatMenuModule,
    FlexLayoutModule.withConfig({
      ssrObserveBreakpoints: ['xs', 'sm', 'gt-sm'],
    }),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAnalytics(() => getAnalytics()),
    // providePerformance(() => getPerformance()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
