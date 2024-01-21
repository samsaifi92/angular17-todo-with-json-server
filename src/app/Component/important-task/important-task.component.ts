import { Component, inject } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ListComponent } from '../list/list.component';
import { TaskService } from '../../Service/task.service';

@Component({
  selector: 'app-important-task',
  standalone: true,
  imports: [WelcomeComponent,ListComponent ],
  templateUrl: './important-task.component.html',
  styleUrl: './important-task.component.scss'
})
export class ImportantTaskComponent {
    taskHttpService= inject(TaskService)
    inputValue: string ="";
    tasks: any[] = [];
    ngOnInit(){
        this.getAllTasks();
    }

    getAllTasks(){
        this.taskHttpService.getAllTasks().subscribe((results : any )=>{
            this.tasks = results.filter((x:any)=>x.important==true);
            console.log(this.tasks);

        })
    }
    onCompleted(task: any){
        console.log(task);

        task.completed= !task.completed;
        this.taskHttpService.updateTask(task).subscribe(()=>{
            console.log(task);
            this.getAllTasks();
        });
    }
    onImportant(task: any){
        task.important=!task.important;
        this.taskHttpService.updateTask(task).subscribe(()=>{
            console.log(task);
            this.getAllTasks();
        });
    }
    onDelete(task: any){
        this.taskHttpService.deleteTask(task.id).subscribe(()=>{
            console.log("delete");
            this.getAllTasks();
        })
    }
}
