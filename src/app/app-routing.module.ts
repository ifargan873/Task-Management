import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProcessComponent } from './work_process/new-process/new-process.component';
import { ProcessListComponent } from './work_process/process-list/process-list.component';

const routes: Routes = [
  { path: 'new', component: NewProcessComponent },
  { path: 'list', component: ProcessListComponent }
 ];;

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: !isIframe ? 'enabled' : 'disabled' // Don't perform initial navigation in iframes
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }