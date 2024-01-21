import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../Service/task.service';
import { ListComponent } from '../list/list.component';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [FormsModule,ListComponent,WelcomeComponent],
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.scss'
})
export class AllTaskComponent {
    taskHttpService= inject(TaskService)
    inputValue: string ="";
    tasks: any[] = [];
    ngOnInit(){
        this.getAllTasks();
    }
    addTask(){
        this.taskHttpService.addTask(this.inputValue).subscribe(()=>{
            // console.log(this.inputValue);
            this.inputValue = "";
        });
        this.getAllTasks();
    }
    getAllTasks(){
        this.taskHttpService.getAllTasks().subscribe((results : any )=>{
            this.tasks = results;
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
