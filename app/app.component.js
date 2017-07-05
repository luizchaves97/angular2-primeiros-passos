"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Task = (function () {
    function Task() {
    }
    return Task;
}());
var TASK = [
    { id: 1, name: "Trabalhar" },
    { id: 2, name: "Jogar Basquete" },
    { id: 3, name: "Lavar a louça" },
    { id: 4, name: "Malhar" },
    { id: 5, name: "Estudar" },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Lista de Tarefas";
        this.tasks = TASK;
    }
    AppComponent.prototype.onClick = function (task) {
        this.selectedTask = task;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>{{ title }}</h1>' +
                '<ul>' +
                '<li *ngFor="let o of tasks" (click)="onClick(o)">' +
                '{{o.id}} - {{o.name}}' +
                '</li>' +
                '</ul>' +
                '<task-edit [task]="selectedTask"></task-edit>'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var TaskEditComponent = (function () {
    function TaskEditComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Task)
    ], TaskEditComponent.prototype, "task", void 0);
    TaskEditComponent = __decorate([
        core_1.Component({
            selector: 'task-edit',
            template: '<div *ngIf="task">' +
                '<input type="text" [(ngModel)]="task.name">' +
                '</div>'
        })
    ], TaskEditComponent);
    return TaskEditComponent;
}());
exports.TaskEditComponent = TaskEditComponent;
//# sourceMappingURL=app.component.js.map