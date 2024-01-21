import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    taskHttpService = inject(HttpClient)
    url: string = 'http://localhost:3000/task';
    addTask(task: string){
        return this.taskHttpService.post(this.url, {
            title : task
        });
    }
    deleteTask(id:any){
        return this.taskHttpService.delete(this.url + '/' + id);
    }
    getAllTasks(){
        return this.taskHttpService.get(this.url);
    }
    updateTask(task: any){
        return this.taskHttpService.put(this.url+'/'+ task.id , task);
    }

}
