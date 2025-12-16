import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
 imports : [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
nom : String;
prenom: string;
age : number;
email : string;
hobby : hobby;

  constructor() {
    this.nom = "Ali";
    this.prenom = "Hassan";
    this.age = 18;
    this.email = "ali52@gamil.com"
    this.hobby = {
      hobbyUn : "lire",
      hobbyDeux: "ecrire",
      hobbyTrois : "Aprendre",
  }
   }

  ngOnInit(){}

  onClick() {
    alert("aucune information");
  }
}


interface hobby {
  hobbyUn :string;
  hobbyDeux :string;
  hobbyTrois :string;
}