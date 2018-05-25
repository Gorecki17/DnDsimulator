import { Component, OnInit } from '@angular/core';
import { Monster } from '../../../models/monster';
import { MonsterService } from '../../../services/monster.service';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'monsteroverview',
  templateUrl: './monsteroverview.html'
})
export class MonsteroverviewComponent implements OnInit {
  private monsters: Monster[];
  private sorted: boolean = false;
 
  private filteredMonsters: Monster[];

  constructor(private monsterService: MonsterService, private gameService:GameService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.monsterService.getMonsters().subscribe(monsters => {this.monsters = monsters; this.filteredMonsters = monsters});
  }

  addToEncounter(monster:Monster){
    this.gameService.addMonster(monster)
  }

  performFilter(filterBy: string): void {
    if (filterBy) {
      filterBy = filterBy.toLocaleLowerCase();
      this.filteredMonsters = this.monsters.filter((monster: Monster) => monster.naam.toLocaleLowerCase().indexOf(filterBy) !== -1);
    } else {
      this.filteredMonsters = this.monsters;
    }
  }

  deleteMonster(id: number){
    this.monsterService.deleteMonster(id).subscribe(() => { this.refresh(); });
  }

  sortByHP() {
    this.sorted = !this.sorted;
    if (this.sorted) {
      this.monsters.sort(function (a: Monster, b: Monster) {
        if (a.maxHP < b.maxHP) {
          return 1;
        }
        if (a.maxHP > b.maxHP) {
          return -1;
        }
        return 0;
      });
    }
    else {
      this.monsters.sort(function (a: Monster, b: Monster) {
        if (a.maxHP < b.maxHP) {
          return -1;
        }
        if (a.maxHP > b.maxHP) {
          return 1;
        }
        return 0;
      });
    }
  }

  sortByAC() {
    this.sorted = !this.sorted;
    if (this.sorted) {
      this.monsters.sort(function (a: Monster, b: Monster) {
        if (a.AC < b.AC) {
          return 1;
        }
        if (a.AC > b.AC) {
          return -1;
        }
        return 0;
      });
    }
    else {
      this.monsters.sort(function (a: Monster, b: Monster) {
        if (a.AC < b.AC) {
          return -1;
        }
        if (a.AC > b.AC) {
          return 1;
        }
        return 0;
      });
    }
  }
}
