import {Component, Input} from '@angular/core';

class Task{
	id:number;
	name:string;
}

let TASK:Task[] = [
	{id: 1, name: "Trabalhar"},
	{id: 2, name: "Jogar Basquete"},
	{id: 3, name: "Lavar a louça"},
	{id: 4, name: "Malhar"},
	{id: 5, name: "Estudar"},
];



@Component({
	selector: 'my-app',
	template: '<h1>{{ title }}</h1>' +
	'<ul>' +
		'<li *ngFor="let o of tasks" (click)="onClick(o)">' +
			'{{o.id}} - {{o.name}}' +
		'</li>' +
	'</ul>' +
	'<task-edit [task]="selectedTask"></task-edit>'


})

export class AppComponent{
	title = "Lista de Tarefas";
	tasks:Task[] = TASK;
	selectedTask:Task;
	onClick(task){
		this.selectedTask = task;
	}
}

@Component({
	selector: 'task-edit',
	template:
	'<div *ngIf="task">' +
	'<input type="text" [(ngModel)]="task.name">' +
	'</div>'


})

export class TaskEditComponent{
	@Input()
	task:Task;
}