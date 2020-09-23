import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpritesheetComponent } from './spritesheet.component';

describe('SpritesheetComponent', () => {
  let component: SpritesheetComponent;
  let fixture: ComponentFixture<SpritesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpritesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpritesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
