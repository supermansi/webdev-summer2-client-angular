import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import {CourseServiceClient} from './services/course.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserServiceClient } from './services/user.service.client';
import { SectionsComponent } from './sections/sections.component';
import {SectionServiceClient} from './services/section.service.client';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import {QuizServiceClient} from './services/quiz.service.client';
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
import { TrueFalseComponent } from './true-false/true-false.component';
import { EssayComponent } from './essay/essay.component';
import { FillBlanksComponent } from './fill-blanks/fill-blanks.component';
import { MulitpleChoiceComponent } from './mulitple-choice/mulitple-choice.component';
import {SubmissionServiceClient} from './services/submission.service.client';
import { QuizSubmissionsComponent } from './quiz-submissions/quiz-submissions.component';
import { QuizAnswersComponent } from './quiz-answers/quiz-answers.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    CourseNavigatorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SectionsComponent,
    EnrollmentComponent,
    AdminUserComponent,
    CourseGridComponent,
    QuizListComponent,
    QuizTakerComponent,
    TrueFalseComponent,
    EssayComponent,
    FillBlanksComponent,
    MulitpleChoiceComponent,
    QuizSubmissionsComponent,
    QuizAnswersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    UserServiceClient,
    SectionServiceClient,
    QuizServiceClient,
    SubmissionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
