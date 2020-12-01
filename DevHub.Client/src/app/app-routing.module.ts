import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '../app/products/products.component';
import { ProfileComponent } from '../app/profile/profile.component';
import { LandingPageComponent } from '../app/landing-page/landing-page.component';
import { MembershipComponent } from './membership/membership.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { MusicComponent } from './music/music.component';
import { AnimationComponent } from './animation/animation.component';
import { MapsComponent } from './maps/maps.component';
import { SpritesheetComponent } from './spritesheet/spritesheet.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
    { path:'products', component: ProductsComponent },
    { path:'profile' , component: ProfileComponent},
    { path:'landing-page', component: LandingPageComponent },
    { path:'membership', component: MembershipComponent },
    { path:'settings', component: SettingsComponent },
    { path:'about', component: AboutComponent },
    { path:'header', component: HeaderComponent },
    { path:'cart', component: CartComponent },
    { path:'music', component: MusicComponent },
    { path:'animation', component: AnimationComponent },
    { path:'maps', component: MapsComponent },
    { path:'spritesheet', component: SpritesheetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], // or corrected
  exports: [RouterModule]
})
export class AppRoutingModule { }
