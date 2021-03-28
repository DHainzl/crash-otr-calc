import { Component } from '@angular/core';
import { CalculationService } from 'src/app/core/calculation/calculation.service';
import { Item } from 'src/app/core/items/item.interface';
import { ItemsService } from 'src/app/core/items/items.service';
import { WeaponStorageService } from 'src/app/core/local-storage/weapon-storage.service';

@Component({
    selector: 'app-weapons',
    templateUrl: './weapons.component.html',
    styleUrls: [ './weapons.component.scss' ],
})
export class WeaponsComponent {
    public weapons = this.getWeapons();
    public categorizedWeapons: { title: string, items: Item[] }[] = [
        {
            title: 'Nitro Weapons',
            items: this.itemsService.getNitroItems().filter(item => item.type === 'weapon'),
        },
        {
            title: 'Frosty Weapons',
            items: this.itemsService.getFrostyItems().filter(item => item.type === 'weapon'),
        },
        {
            title: 'Inferno Weapons',
            items: this.itemsService.getInfernoItems().filter(item => item.type === 'weapon'),
        },
        {
            title: 'Oxide Weapons',
            items: this.itemsService.getOxideItems().filter(item => item.type === 'weapon'),
        },
    ];

    constructor(
        private itemsService: ItemsService,
        private calculationService: CalculationService,
        private weaponStorageService: WeaponStorageService,
    ) { }

    updateWeapons(itemId: string, count: number): void {
        this.weapons[itemId] = count;
        this.storeWeapons();
    }

    clearWeapons(): void {
        Object.keys(this.weapons).forEach(key => this.weapons[key] = 0);
        this.storeWeapons();
    }

    private storeWeapons(): void {
        this.weaponStorageService.saveWeapons(this.weapons);
        this.calculationService.triggerCalculation();
    }

    private getWeapons(): { [ item: string ]: number } {
        const inventory: { [ item: string ]: number } = {};
        const storedInventory: { [ item: string]: number } = this.weaponStorageService.getWeapons();
        this.itemsService.getAllItems().forEach(item => {
            inventory[item.id] = 0;

            if (storedInventory[item.id]) {
                inventory[item.id] = storedInventory[item.id];
            }
        });

        this.weaponStorageService.saveWeapons(inventory);
        return inventory;
    }
}
