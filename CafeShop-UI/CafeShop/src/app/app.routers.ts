import { Routes } from '@angular/router';
import { HomeScreenComponent } from 'src/screens/home-screen/home-screen.component';
import { HistoryScreenComponent } from 'src/screens/history-screen/history-screen.component';

export const appRoutes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'lich-su', component: HistoryScreenComponent },
];
