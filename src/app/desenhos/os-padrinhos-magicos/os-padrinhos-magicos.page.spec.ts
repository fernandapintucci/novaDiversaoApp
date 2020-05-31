import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OsPadrinhosMagicosPage } from './os-padrinhos-magicos.page';

describe('OsPadrinhosMagicosPage', () => {
  let component: OsPadrinhosMagicosPage;
  let fixture: ComponentFixture<OsPadrinhosMagicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsPadrinhosMagicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OsPadrinhosMagicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
