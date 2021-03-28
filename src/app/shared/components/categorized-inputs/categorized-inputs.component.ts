import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/core/items/item.interface';

export interface CategorizedItems {
    title: string;
    items: Item[];
}

@Component({
    selector: 'app-categorized-inputs',
    templateUrl: './categorized-inputs.component.html',
    styleUrls: [ 'categorized-inputs.component.scss' ],
})
export class CategorizedInputsComponent {
    @Input()
    categorizedItems: CategorizedItems[] = [];

    @Input()
    stock: { [ itemId: string ]: number } = {};

    @Output()
    stockChange: EventEmitter<{ itemId: string, newStock: number }> = new EventEmitter();

    updateStock(itemId: string, count: number): void {
        this.stockChange.emit({
            itemId,
            newStock: count,
        });
    }
}
