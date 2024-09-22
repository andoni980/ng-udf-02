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
  public onDeleteChar = new EventEmitter<string>();

  character: Character = {
    name: '',
    power: 0
  }

  onDeleteCharacter(id?: string): void {

    if (!id) return;
    this.onDeleteChar.emit(id);

  }

}
