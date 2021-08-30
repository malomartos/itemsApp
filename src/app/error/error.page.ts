import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * Component for showing the error when getting items
 */
@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage {

  constructor(  private router: Router ) { }

/**
 * Function to handle the click on retry button
 */
  retry() {
    //Redirection to loading page
    this.router.navigate(['/loading']);
  }

}
