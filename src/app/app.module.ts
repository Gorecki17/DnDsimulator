import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { CreaturesData } from './services/in-memory-data.service';

import { LibraryComponent } from './components/encounter/_childcomponents/library.component';
import { EncounterDetailComponent } from './components/encounter/_childcomponents/encounterdetail.component';

import { EncounteroverviewComponent } from './components/encounter/encounteroverview/encounteroverview.component';

import { HeroDetailComponent } from './components/encounter/hero/herodetail.component';
import { HeroesOverviewComponent } from './components/encounter/hero/heroes-overview.component';

import { MonsteroverviewComponent } from './components/encounter/monster/monsteroverview.component';
import { MonsterDetailComponent } from './components/encounter/monster/monsterdetail.component';

import { HomeComponent } from './components/home/home.component';
import { EncounterComponent } from './components/encounter/encounter.component';

import { HeroService } from './services/hero.service';
import { MonsterService } from './services/monster.service';
import { EncounterService } from './services/encounter.service';
import { GameService } from './services/game.service';
import { FightComponent } from './components/encounter/_childcomponents/fight.component';
import { RollInitiativeComponent } from './components/encounter/_childcomponents/roll-initiative.component';

import { BtnSaveComponent } from './components/shared/btn-save.component';
import { DetailComponent } from './components/shared/detail.component';
import { ListOverviewComponent } from './components/shared/list-overview.component';
import { FilterComponent } from './components/shared/filter.component';
import { FightToolbarComponent } from './components/shared/fight-toolbar.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'main/:id',
    component: EncounterComponent,
    children: [
      { path: 'heroes/:id', component: HeroDetailComponent },
      { path: 'monsters/:id', component: MonsterDetailComponent },
      { path: 'heroes/:id/edit', component: HeroDetailComponent },
      { path: 'monsters/:id/edit', component: MonsterDetailComponent },
      {path: 'encounters/:id', component: EncounterDetailComponent},
      { path: 'heroes', component: HeroesOverviewComponent },
      { path: 'monsters', component: MonsteroverviewComponent },
      { path: 'encounters', component: EncounteroverviewComponent },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesOverviewComponent,
    EncounterDetailComponent,
    EncounteroverviewComponent,
    MonsterDetailComponent,
    MonsteroverviewComponent,
    LibraryComponent,
    HomeComponent,
    EncounterComponent,
    FightComponent,
    RollInitiativeComponent,
    BtnSaveComponent,
    DetailComponent,
    ListOverviewComponent,
    FilterComponent,
    FightToolbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      CreaturesData, { dataEncapsulation: false }
    ),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [HeroService, MonsterService, EncounterService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
