import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kefel',
  templateUrl: './kefel.component.html',
  styleUrls: ['./kefel.component.scss']
})
export class KefelComponent implements OnInit, OnDestroy {
  values: Array<{ x: number; y: number }> = [];
  size = 10;
  
  constructor(private readonly activedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log('init');
    this.activedRoute.queryParams.subscribe((params) => {
      this.size = params['size'] || 10;
      this.values = this.getMulBoard(this.size);
    });
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }

  getMulBoard(x: number) {
    const arr = [];
    for (let index = 1; index <= x; index++) {
      for (let index2 = 1; index2 <= x; index2++) {
        arr.push({ x: index, y: index2 });
      }
    }
    return arr;
  }
}