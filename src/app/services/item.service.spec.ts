import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';

describe('ItemService', () => {
  let itemService: ItemService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule] ,
      providers: [ItemService]
    });
    itemService = TestBed.inject(ItemService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(itemService).toBeTruthy();
  });

  it('should get all Items', () => {
    
    itemService.getItems(true)
      .subscribe( items => {
        expect(items).toBeTruthy();
        expect(items.length).toBe(1);
      })
    
    const req = httpTestingController.expectOne('/assets/db/items.json');

    expect(req.request.method).toEqual('GET');

    req.flush(
      [{
            "title": "minim consequat",
            "description": "Est reprehenderit excepteur nostrud laboris magna. Culpa magna cupidatat eu reprehenderit exercitation tempor exercitation sit id tempor."
      }]
    );

    httpTestingController.verify();

  });
});
