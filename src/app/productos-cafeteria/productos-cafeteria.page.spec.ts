import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductosCafeteriaPage } from './productos-cafeteria.page';

describe('ProductosCafeteriaPage', () => {
  let component: ProductosCafeteriaPage;
  let fixture: ComponentFixture<ProductosCafeteriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosCafeteriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosCafeteriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
