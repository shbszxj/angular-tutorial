import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import Heroes from "../heroes.json";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes = Heroes;

  constructor() {}

  ngOnInit() {}
}
