import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cow } from '../models/cow.model';
import { appConstants } from '../../config/app-constants';

@Injectable({
  providedIn: 'root',
})
export class CowService {

  constructor(private http: HttpClient) {}

  
  ngOnInit() {
    
  }

  /**
   * Retrieves the list of cows from the JSON file.
   * @returns an Observable containing the list of cows.
   */
  public getCowsFromJsonFile(): Observable<Cow[]> {
    return this.http.get<Cow[]>(appConstants.cowsJsonUrl);
  }

  /**
   * Retrieves the list of cows from local storage.
   * @returns The list of cows, or an empty array if no cows are found.
   */
  public getCowsFromLocalStorage(): Cow[] {
    const storedCowsJson = localStorage.getItem('cows');
    return storedCowsJson ? JSON.parse(storedCowsJson) : [];
  }

}
