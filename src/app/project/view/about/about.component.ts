import { Component, OnInit ,Input} from '@angular/core';
import {FormControl} from '@angular/forms';

export interface Status {
  value: string;
  viewValue: string;
}
export interface Pokemon {
  value: string;
  viewValue: string;
}
export interface PokemonGroup {
 
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  images: any;
  hello: any
  status: Status[] = [
    {value: 'steak-0', viewValue: 'Just Launched'},
    {value: 'pizza-1', viewValue: 'InProgress'},
    {value: 'tacos-2', viewValue: 'Active'}
  ];
  pokemonControl = new FormControl();
  pokemonGroups: PokemonGroup[] = [
    {
      name: 'Residential',
      pokemon: [
        {value: 'bulbasaur-0', viewValue: 'Plot'},
        {value: 'oddish-1', viewValue: 'House'},
        {value: 'bellsprout-2', viewValue: 'Villa'},
        {value: 'bulbasaur-0', viewValue: 'Apartment'},
        {value: 'oddish-1', viewValue: 'Farm House'},
        {value: 'bellsprout-2', viewValue: 'Multistorey apartment'}
      ]
    },
    {
      name: 'Commercial',
      pokemon: [
        {value: 'squirtle-3', viewValue: 'Office space'},
        {value: 'psyduck-4', viewValue: 'Office'},
        {value: 'horsea-5', viewValue: 'Warehouse'},
        {value: 'horsea-5', viewValue: 'Commercial Land'},
        {value: 'horsea-5', viewValue: 'Shop'},
      ]
    },
    {
      name: 'Land',
      pokemon: [
        {value: 'charmander-6', viewValue: 'Agriculture land'},
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
    if (this.images === undefined || this.images === null || this.images.length === 0) {
      this.images = [];
    }
  }
  public addImage() {
    this.images.push(null);
  }

  public processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      let imageData = (readerEvent.target as any).result;
      this.images.push(imageData);
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  removeImage(hello){
    this.images.splice(hello, 1);
   }
}
