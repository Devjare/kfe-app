import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidosCafeteriaPage } from './pedidos-cafeteria.page';

describe('PedidosCafeteriaPage', () => {
  let component: PedidosCafeteriaPage;
  let fixture: ComponentFixture<PedidosCafeteriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosCafeteriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosCafeteriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
