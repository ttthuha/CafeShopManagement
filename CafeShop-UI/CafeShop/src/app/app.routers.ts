import { Routes } from '@angular/router';
import { HomeScreenComponent } from 'src/screens/home-screen/home-screen.component';
import { HistoryScreenComponent } from 'src/screens/history-screen/history-screen.component';
import { UserManagementScreenComponent } from '../screens/user-management-screen/user-management-screen.component';

export const appRoutes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'lich-su', component: HistoryScreenComponent },
  { path: 'quan-ly-nhan-vien', component: UserManagementScreenComponent },
];
