import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Cow } from '../../../models/cow.model';
import { CowService } from '../../../services/cow';
import { RouterLink } from '@angular/router';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-cows-list',
  imports: [
    TableModule,
    RouterLink,
    DatePipe,
    ButtonModule,
    UpperCasePipe,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    SelectModule
  ],
  templateUrl: './cows-list.html',
  styleUrl: './cows-list.scss',
})
export class CowsList {
  cows: Cow[] = [];
  cowService = inject(CowService);
  status = [
    { name: 'Active', code: 'Active' },
    { name: 'In Treatment', code: 'In Treatment' },
    { name: 'Deceased', code: 'Deceased' },
    { name: 'Sold', code: 'Sold' }
  ];

  pen = [
    { name: 'A1', code: 'A1' },
    { name: 'A2', code: 'A2' },
    { name: 'B1', code: 'B1' },
    { name: 'C1', code: 'C1' },
    { name: 'C2', code: 'C2' }
  ]

  ngOnInit() {
    this.loadCowsFromJsonFile();
    this.getCowsFromLocalStorage();
  }

  /**
   * Loads the list of cows from the JSON file.
   * @returns an Observable containing the list of cows.
   */
  private loadCowsFromJsonFile(): void {
    this.cowService.getCowsFromJsonFile().subscribe({
      next: (cows) => this.saveCowsToLocalStorage(cows),
      error: (error) => console.error('Error loading cows from JSON file', error),
    });
  }

  /**
   * Saves the list of cows in local storage.
   * @param cows - The list of cows to be saved.
   */
  private saveCowsToLocalStorage(cows: Cow[]): void {
    const cowsData = JSON.parse(localStorage.getItem('cows') || '[]');
    if (cowsData.length === 0) {
      localStorage.setItem('cows', JSON.stringify(cows));
    }
  }

  /**
   * Retrieves the list of cows from local storage.
   * @returns The list of cows.
   */
  private getCowsFromLocalStorage(): void {
    this.cows = this.cowService.getCowsFromLocalStorage();
  }

  resetFilters(table: any) {
    table.clear();
  }

}
