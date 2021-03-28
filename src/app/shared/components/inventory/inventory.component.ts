import { Component } from '@angular/core';
import { CalculationService } from 'src/app/core/calculation/calculation.service';
import { Item } from 'src/app/core/items/item.interface';
import { ItemsService } from 'src/app/core/items/items.service';
import { InventoryStorageService } from 'src/app/core/local-storage/inventory-storage.service';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: [ './inventory.component.scss' ],
})
export class InventoryComponent {
    public inventory = this.getInventory();
    public categorizedItems: { title: string, items: Item[] }[] = [
        {
            title: 'Nitro Items',
            items: this.itemsService.getNitroItems(),
        },
        {
            title: 'Frosty Items',
            items: this.itemsService.getFrostyItems(),
        },
        {
            title: 'Inferno Items',
            items: this.itemsService.getInfernoItems(),
        },
        {
            title: 'Oxide Items',
            items: this.itemsService.getOxideItems(),
        },
    ];

    constructor(
        private itemsService: ItemsService,
        private calculationService: CalculationService,
        private inventoryStorageService: InventoryStorageService,
    ) { }

    updateInventory(itemId: string, count: number): void {
        this.inventory[itemId] = count;
        this.storeInventory();
    }

    clearInventory(): void {
        Object.keys(this.inventory).forEach(key => this.inventory[key] = 0);
        this.storeInventory();
    }

    private storeInventory(): void {
        this.inventoryStorageService.saveInventory(this.inventory);
        this.calculationService.triggerCalculation();
    }

    private getInventory(): { [ item: string ]: number } {
        const inventory: { [ item: string ]: number } = {};
        const storedInventory: { [ item: string]: number } = this.inventoryStorageService.getInventory();

        this.itemsService.getAllItems().forEach(item => {
            inventory[item.id] = 0;

            if (storedInventory[item.id]) {
                inventory[item.id] = storedInventory[item.id];
            }
        });

        this.inventoryStorageService.saveInventory(inventory);
        return inventory;
    }
}
