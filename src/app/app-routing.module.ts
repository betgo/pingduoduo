import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeContainerComponent } from './home';

const routes: Routes = [
    { path: '',redirectTo:'home',matcher:'full'},


    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
