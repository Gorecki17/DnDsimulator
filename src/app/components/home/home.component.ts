import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Encounter } from '../../models/encounter';
import { EncounterService } from '../../services/encounter.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: ['.container{margin-top: 20%}']
})

export class HomeComponent implements OnInit {
  private showText: boolean = false;
  private showNumber: boolean = false;
  private encounter: Encounter;
  private encounterNaam: string;
  private encounterId: number;
  private playerNaam: string;

  constructor(
    private router: Router,
    private encounterService:EncounterService,
    private gameService: GameService
  ) { }

  ngOnInit() {
  }

  public startGameWithName(): void {
    this.gameService.startNewEncounterWithName(this.encounterNaam, this.playerNaam);
  }

  public startGameWithId(): void {
    this.gameService.startNewEncounterWithId(this.encounterId, this.playerNaam);
  }

  public showTextField(): void {
    this.showNumber = false;
    this.showText = !this.showText;
  }

  public showNumberField(): void {
    this.showText = false;
    this.showNumber = !this.showNumber;
  }

}
