import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsCafeteriaPage } from './tabs-cafeteria.page';

describe('TabsCafeteriaPage', () => {
  let component: TabsCafeteriaPage;
  let fixture: ComponentFixture<TabsCafeteriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsCafeteriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsCafeteriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
