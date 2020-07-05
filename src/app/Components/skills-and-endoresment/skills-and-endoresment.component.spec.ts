import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndEndoresmentComponent } from './skills-and-endoresment.component';

describe('SkillsAndEndoresmentComponent', () => {
  let component: SkillsAndEndoresmentComponent;
  let fixture: ComponentFixture<SkillsAndEndoresmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsAndEndoresmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsAndEndoresmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
