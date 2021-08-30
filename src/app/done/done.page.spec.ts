import { ComponentFixture, fakeAsync, TestBed, waitForAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { routes } from '../app-routing.module';
import { AppState } from '../state/state';
import { logOut } from './../state/actions';
import { DonePage } from './done.page';


describe('DonePage', () => {
  let component: DonePage;
  let fixture: ComponentFixture<DonePage>;
  let router: Router;
  let store: MockStore<AppState>;

  const initialState = { 
      items: {
        list: [{
          title: 'minim consequat',
          description: 'Est reprehenderit excepteur nostrud laboris magna. Culpa magna cupidatat eu reprehenderit exercitation'
        }],
      fetched: undefined}
};

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [DonePage],
      imports: [IonicModule.forRoot(),
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        provideMockStore({initialState})
      ]
      }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(DonePage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    
    fixture.detectChanges();

    spyOn(store, 'dispatch').and.callFake(() => {});

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call to logout method when logout button is pressed', () => {
    const button = fixture.debugElement.query(By.css('ion-button')).nativeElement;
    const spyLogOut = spyOn(component, 'logOut');

    button.click();
    fixture.detectChanges();

    expect(spyLogOut).toHaveBeenCalled();
  });

  it('should redirect to Login after a logout', () => {
    const spyRouter = spyOn(router, 'navigate');

    component.logOut();

    expect(spyRouter).toHaveBeenCalledWith(['/login']);
  });

  it('LogOut should dispatch Logout action',() =>{
    component.logOut();

    expect(store.dispatch).toHaveBeenCalledWith( logOut() );
  });

  it('should show the items on the page', () => {
    const items = fixture.debugElement.queryAll(By.css('ion-item'));
    
    expect(items.length).toBe(1);
  });

});
