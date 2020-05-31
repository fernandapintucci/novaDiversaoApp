import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VingadoresGuerraInfinitaPage } from './vingadores-guerra-infinita.page';

describe('VingadoresGuerraInfinitaPage', () => {
  let component: VingadoresGuerraInfinitaPage;
  let fixture: ComponentFixture<VingadoresGuerraInfinitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VingadoresGuerraInfinitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VingadoresGuerraInfinitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
