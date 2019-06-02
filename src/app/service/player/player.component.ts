import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styles: []
})
export class PlayerComponent implements OnInit {

  public players=[];
  constructor(private _playerService:PlayerService) { }

  ngOnInit() {
    this.players=this._playerService.getPlayer();
  }

}
