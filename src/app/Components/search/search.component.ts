import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchEmitter = new EventEmitter<string>();

  onSearchSubject = new BehaviorSubject<string>('');

  searchText: string;

  constructor() {
    this.onSearchSubject.asObservable().pipe(
      debounceTime(500),
    ).subscribe((text) => {
      this.searchEmitter.emit(text);
    });
  }

  ngOnInit(): void {
  }

  onKeyUp(): void {
    this.onSearchSubject.next(this.searchText);
  }
}
