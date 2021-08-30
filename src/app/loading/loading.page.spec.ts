import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { routes } from '../app-routing.module';
import { getItems } from './../state/actions';
import { LoadingPage } from './loading.page';


describe('LoadingPage', () => {
  let component: LoadingPage;
  let fixture: ComponentFixture<LoadingPage>;
  let router: Router;
  let store: MockStore;

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
      declarations: [ LoadingPage ],
      imports: [IonicModule.forRoot(),
                RouterModule.forRoot(routes),
                HttpClientTestingModule],
      providers: [
        provideMockStore({initialState})
      ]
    }).compileComponents().then(()=>{
      
      fixture = TestBed.createComponent(LoadingPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
      router = TestBed.inject(Router);
      store = TestBed.inject(MockStore);

      spyOn(store, 'dispatch').and.callFake(() => {});
    });


  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a loading spinner', () => {
    const spinner = fixture.debugElement.query(By.css('ion-icon[name="refresh"]'));

    expect(spinner).toBeTruthy();
  });

  it('should dispatch getItems', () => {
    component.ionViewDidEnter();

    expect(store.dispatch).toHaveBeenCalledWith(getItems());
  });

  it('should redirect to Done page if items where fetched', fakeAsync(() => {
    const spyRouter = spyOn(router, 'navigate');

    component.ionViewDidEnter();
    store.setState({
      items: {
        list: [{
          title: 'minim consequat',
          description: 'Est reprehenderit excepteur nostrud laboris magna. Culpa magna cupidatat eu reprehenderit exercitation'
        }],
      fetched: 'fetched'}
    });
    store.refreshState();
    tick(2001);


    expect(spyRouter).toHaveBeenCalledOnceWith(['/done']);
  }));

  it('should redirect to Error page if there was an error fetching items', fakeAsync(() => {
    const spyRouter = spyOn(router, 'navigate');

    component.ionViewDidEnter();
    store.setState({
      items: {
        list: [],
      fetched: 'error'}
    });
    store.refreshState();
    tick(2001);
    
    expect(spyRouter).toHaveBeenCalledOnceWith(['/error']);
  }));
});
