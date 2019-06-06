import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { FormsModule } from '@angular/forms';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';

import { AppComponent } from "./app.component";
import { EventOverviewComponent} from './event-overview/event-overview.component';
import { EventSnippetComponent } from './event-snippet/event-snippet.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { DatepickerModalComponent } from './datepicker-modal/datepicker-modal.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        HttpClientModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        FormsModule,

    ],
    declarations: [
        AppComponent,
        EventOverviewComponent,
        EventSnippetComponent,
        NavigationBarComponent,
        ProfilePageComponent,
        EventCreationComponent,
        DatepickerModalComponent,
        EventDetailComponent,
    ],
    entryComponents: [
        DatepickerModalComponent
    ],
    providers: [ModalDialogService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
