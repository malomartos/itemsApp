import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorPage } from './error.page';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('ErrorPage', () => {
  let component: ErrorPage;
  let fixture: ComponentFixture<ErrorPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorPage ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a Retry button', () => {
    const button = fixture.debugElement.query(By.css('ion-button'));

    expect(button.nativeElement.innerHTML).toBe('Retry');
  });

  it('should call to retry on click retry button', () => {
    const spyRetry = spyOn(component, 'retry');
    const button = fixture.debugElement.query(By.css('ion-button')).nativeElement;

    button.click();

    expect(spyRetry).toHaveBeenCalled();
  });

  it('should redirect to Loading page when retry method is called', ()=>{
    const spyRouter = spyOn(router,'navigate');

    component.retry();

    expect(spyRouter).toHaveBeenCalledWith(['/loading']);
  })
});
