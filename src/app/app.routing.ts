import {Routes, RouterModule} from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionsComponent} from './sections/sections.component';
import {EnrollmentComponent} from './enrollment/enrollment.component';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {AdminUserComponent} from './admin-user/admin-user.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';

const appRoutes: Routes = [
  {path: 'courses', component: CourseNavigatorComponent},
  {path: 'quiz', component: QuizListComponent},
  {path: 'course/:courseId', component: CourseNavigatorComponent},
  {path: 'course/:courseId/section', component: SectionsComponent},
  {path: 'grid', component: CourseGridComponent},
  {path: '', component: CourseGridComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'sections', component: SectionsComponent},
  {path: 'enrollment', component: EnrollmentComponent},
  {path: 'admin', component: AdminUserComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
