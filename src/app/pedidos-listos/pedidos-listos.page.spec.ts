import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidosListosPage } from './pedidos-listos.page';

describe('PedidosListosPage', () => {
  let component: PedidosListosPage;
  let fixture: ComponentFixture<PedidosListosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosListosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosListosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
