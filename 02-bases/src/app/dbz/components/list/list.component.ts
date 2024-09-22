import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteChar = new EventEmitter<number>();

  character: Character = {
    name: '',
    power: 0
  }

  onDeleteCharacter(index: number): void {

    this.onDeleteChar.emit(index);

    console.log({ index });
  }

}
