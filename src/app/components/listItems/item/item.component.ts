import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
    @Input() transaction: any;
    @Output() delete: EventEmitter<any> = new EventEmitter();
    deleteTransaction() {
      console.log("This row will be deleted.");
      this.delete.emit(this.transaction);
    }
}
