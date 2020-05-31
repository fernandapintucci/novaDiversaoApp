import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DarkPage } from './dark.page';

describe('DarkPage', () => {
  let component: DarkPage;
  let fixture: ComponentFixture<DarkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
