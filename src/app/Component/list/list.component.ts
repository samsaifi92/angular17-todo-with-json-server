import { Component, EventEmitter, Inject, Input, Output, inject } from '@angular/core';
import { TaskService } from '../../Service/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
    taskHttpService= Inject(TaskService)
    @Input() tasks: any[] = [];
    @Output() important = new EventEmitter();
    @Output() completed = new EventEmitter();
    @Output() delete = new EventEmitter();
    importantTask(task:any){
        this.important.emit(task);
    }
    completedTask(task:any){
        this.completed.emit(task);
    }
    deleteTask(task:any){
        this.delete.emit(task);
    }
}
