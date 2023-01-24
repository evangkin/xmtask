import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteStreamComponent } from './infinite-stream.component';

describe('InfiniteStreamComponent', () => {
  let component: InfiniteStreamComponent;
  let fixture: ComponentFixture<InfiniteStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteStreamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiniteStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
