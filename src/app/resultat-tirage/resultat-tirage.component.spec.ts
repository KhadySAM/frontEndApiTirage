import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatTirageComponent } from './resultat-tirage.component';

describe('ResultatTirageComponent', () => {
  let component: ResultatTirageComponent;
  let fixture: ComponentFixture<ResultatTirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatTirageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatTirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
