import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlabelsComponent } from './getlabels.component';

describe('GetlabelsComponent', () => {
  let component: GetlabelsComponent;
  let fixture: ComponentFixture<GetlabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlabelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetlabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
