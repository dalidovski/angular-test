import { Character, Info } from '../data.interfaces';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // API returned values
  public info: Info | undefined;
  public results: Character[] | undefined;

  // Form fields
  public nameOfCharacter = '';
  public page = 1;

  private readonly ngUnsubscribe = new Subject<void>();

  constructor(private readonly dataService: DataService) {}

  public ngOnInit(): void {
    this.dataService
      .getAllCharacters(this.page, this.nameOfCharacter)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        this.info = res.info;
        this.results = res.results;
      });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  /**
   * TODO: Implement here the function to search ALL the characters
   * available through the API.
   *
   * @see https://rickandmortyapi.com/api/character/?name={name-of-the-character}
   */
  public searchCharacter() {
    this.page = 1;
    this.dataService
      .getAllCharacters(this.page, this.nameOfCharacter)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        this.info = res.info;
        this.results = res.results;
      });
  }

  /**
   * TODO: Implement here the function to display the characters
   * available on the other pages.
   *
   * @see https://rickandmortyapi.com/api/character/?page={page-number}
   */
  public loadMore() {
    this.page++;
    this.dataService
      .getAllCharacters(this.page, this.nameOfCharacter)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        this.info = res.info;
        if (this.results && res.results)
          this.results = this.results.concat(res.results);
      });
  }
}
