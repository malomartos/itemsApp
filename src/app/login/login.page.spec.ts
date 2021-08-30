import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { routes } from '../app-routing.module';
import { LoginPage } from './login.page';



describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(),
                RouterTestingModule.withRoutes(routes)]
    }).compileComponents().then(()=>{

      fixture = TestBed.createComponent(LoginPage);
      component = fixture.componentInstance;
      router = TestBed.inject(Router);
      fixture.detectChanges();
      router.initialNavigation();

    });


  }));

  it('should create', () => {

    expect(component).toBeTruthy();
    
  });

  it('should call login method when button is clicked', () =>{

    const spyLogin = spyOn(component, 'login');
    const button = fixture.debugElement.query(By.css('ion-button'));

    button.nativeElement.click();
    fixture.detectChanges();
    
    expect(spyLogin).toHaveBeenCalled();

  });

  it('should redirect to Loading page when login() is called', () =>{
    
    const spy = spyOn(router,'navigate');
    
    component.login();
    
    expect(spy).toHaveBeenCalledWith(['/loading']);

  });
});
