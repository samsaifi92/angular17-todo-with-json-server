import { Routes } from '@angular/router';
import { CompletedTaskComponent } from './Component/completed-task/completed-task.component';
import { ImportantTaskComponent } from './Component/important-task/important-task.component';
import { AllTaskComponent } from './Component/all-task/all-task.component';

export const routes: Routes = [
    {
        path:'',
        component:AllTaskComponent,
        pathMatch: 'full'
    },{
        path: 'completed-task',
        component: CompletedTaskComponent
    },
    {
        path: 'important-task',
        component: ImportantTaskComponent
    }
];
