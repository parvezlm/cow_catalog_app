import { Routes } from '@angular/router';
import { CowsList } from './components/cow/cows-list/cows-list';
import { CowDetail } from './components/cow/cow-detail/cow-detail';
import { AddCowForm } from './components/cow/add-cow-form/add-cow-form';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        component: CowsList
    },
    {
        path: 'cow-details/:id',
        component: CowDetail
    },
    {
        path: 'add-cow',
        component: AddCowForm
    },
    {
        path: '**',
        component: NotFound
    }
];
