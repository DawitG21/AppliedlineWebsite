import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtIataNdcComponent } from './et-iata-ndc.component';

describe('EtIataNdcComponent', () => {
  let component: EtIataNdcComponent;
  let fixture: ComponentFixture<EtIataNdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtIataNdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtIataNdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
