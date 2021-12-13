import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskListComponent } from './todo-task-list.component';

describe('TodoTaskContainerComponent', () => {
  let component: TodoTaskListComponent;
  let fixture: ComponentFixture<TodoTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
