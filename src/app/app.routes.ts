import { Routes } from '@angular/router';

export const routes: Routes = [
{
  path: '',
  loadComponent: () => import('./notepad/notepad.component').then(m => m.NotepadComponent)
}
];
