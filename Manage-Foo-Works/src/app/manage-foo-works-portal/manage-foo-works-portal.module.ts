import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ManageFooWorksPortalComponent } from './manage-foo-works-portal.component';


import { Routing } from './manage-foo-works-portal.routing';

@NgModule({
  declarations: [ManageFooWorksPortalComponent],
  imports: [ CommonModule, Routing ]
})
export class ManageFooWorksPortalModule { }
