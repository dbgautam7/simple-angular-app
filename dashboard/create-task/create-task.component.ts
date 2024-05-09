import { Component, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Task } from '../../Model/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  standalone:true,
  imports:[FormsModule]
 
})
export class CreateTaskComponent {
  @Input() isEditMode: boolean = false;

  @Input() selectedTask: Task;

  @ViewChild('taskForm') taskForm: NgForm;

  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitTaskData: EventEmitter<Task> = new EventEmitter<Task>();

  ngAfterViewInit(){
    setTimeout(() => {
      this.taskForm.form.patchValue(this.selectedTask);
    }, 0);
    
  }

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  OnFormSubmitted(form: NgForm){
    this.EmitTaskData.emit(form.value);
    this.CloseForm.emit(false);
  }
}
