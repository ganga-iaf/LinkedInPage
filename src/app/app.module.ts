import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatDividerModule} from '@angular/material/divider';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { UserBasicInfoComponent } from './Components/user-basic-info/user-basic-info.component';
import { VisitorComponent } from './Components/visitor/visitor.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { ProjectComponent } from './Components/project/project.component';
import { CourseComponent } from './Components/course/course.component';
import { EducationComponent } from './Components/education/education.component';
import { SkillsAndEndoresmentComponent } from './Components/skills-and-endoresment/skills-and-endoresment.component';
import { UserComponent } from './Components/user/user.component';
import { UserMainContentComponent } from './Components/user-main-content/user-main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserBasicInfoComponent,
    VisitorComponent,
    ExperienceComponent,
    ProjectComponent,
    CourseComponent,
    EducationComponent,
    SkillsAndEndoresmentComponent,
    UserComponent,
    UserMainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
