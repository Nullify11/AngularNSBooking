import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { EventOverviewComponent } from './event-overview/event-overview.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "/events", pathMatch: "full"},
  { path: "events", component: EventOverviewComponent },
  { path: "profile", component: ProfilePageComponent},
  { path: "create", component: EventCreationComponent},
  { path: "detail/:id", component: EventDetailComponent }
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppRoutingModule { }
