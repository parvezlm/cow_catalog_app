import { Component, inject } from '@angular/core';
import { Cow } from '../../../models/cow.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CowService } from '../../../services/cow';

@Component({
  selector: 'app-cow-detail',
  imports: [DatePipe, RouterLink],
  templateUrl: './cow-detail.html',
  styleUrl: './cow-detail.scss',
})
export class CowDetail {
  cow!: any;
  activatedRoute = inject(ActivatedRoute);
  cowService = inject(CowService);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const cows = this.cowService.getCowsFromLocalStorage();
      this.cow = cows.find((cow: Cow) => cow.id == params['id']);
    })
  }

}
