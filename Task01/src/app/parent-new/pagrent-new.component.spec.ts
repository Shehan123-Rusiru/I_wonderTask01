import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagrentNewComponent } from './pagrent-new.component';

describe('PagrentNewComponent', () => {
  let component: PagrentNewComponent;
  let fixture: ComponentFixture<PagrentNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagrentNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagrentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
