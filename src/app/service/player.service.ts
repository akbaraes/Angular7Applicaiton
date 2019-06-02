import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayer(){
    let players=[
      {id:1,Firstname:"Akbar",Lastname:"Jinna"},
      {id:2,Firstname:"Jankeer",Lastname:"Jinna"},
      {id:3,Firstname:"Subaitha",Lastname:"Jinna"},
      {id:4,Firstname:"Nisha",Lastname:"Jinna"}
   ]
   return players;
  }
}
