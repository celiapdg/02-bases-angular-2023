import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
// paquete para generar ids https://www.npmjs.com/package/uuid
import { v4 as uuid } from 'uuid';

// si este provideIn: root no estuviera, el servicio debería
// estar indicado en un módulo, en providers
@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegetta',
    power: 7500
  },];


  addCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character, // primero el original
      id: uuid(),   // luego lo que queremos sustituir
    }
    this.characters.unshift(newCharacter);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }

  constructor() { }

}
