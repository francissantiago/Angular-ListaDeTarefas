import { Component, EventEmitter, Input, Output } from '@angular/core';

// Interfaces
import { IListItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-input-list-item',
  standalone: true,
  imports: [],
  templateUrl: './input-list-item.component.html',
  styleUrl: './input-list-item.component.scss'
})
export class InputListItemComponent {

  @Input({ required: true }) public inputListItems: IListItems[] = [];

  @Output() public outputUpdateeItemCheckbox = new EventEmitter<{
    id: string;
    checked: boolean
  }>();

  public updateItemCheckbox(id: string, checked: boolean) {
    return this.outputUpdateeItemCheckbox.emit({ id, checked });
  }
}
