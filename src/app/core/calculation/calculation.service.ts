import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Item } from '../items/item.interface';
import { ItemsService } from '../items/items.service';
import { InventoryStorageService } from '../local-storage/inventory-storage.service';
import { WeaponStorageService } from '../local-storage/weapon-storage.service';

@Injectable({ providedIn: 'root' })
export class CalculationService {
    public calculationResult: Subject<{ [ item: string ]: number }> = new BehaviorSubject({});

    constructor(
        private itemsService: ItemsService,
        private inventoryStorageService: InventoryStorageService,
        private weaponStorageService: WeaponStorageService,
    ) { }

    public triggerCalculation(): void {
        const inventory = this.inventoryStorageService.getInventory();
        const weapons = this.weaponStorageService.getWeapons();
        const result = this._getNecessaryMaterials(weapons, inventory);

        this.calculationResult.next(result);
    }

    public _getNecessaryMaterials(
        weapons: { [ item: string ]: number },
        inventory: { [ item: string ]: number },
    ): { [ item: string ]: number } {
        const allItems = this.itemsService.getAllItems();
        const inventoryCopy = Object.assign({}, inventory);

        const necessaryItems = this.getNecessaryMaterialsRecursive(weapons, inventoryCopy, allItems);
        const necessaryItemsFiltered: { [ item: string ]: number } = {};
        Object.keys(necessaryItems)
            .filter(key => necessaryItems[key])
            .forEach(key => necessaryItemsFiltered[key] = necessaryItems[key]);

        return necessaryItemsFiltered;
    }

    private getNecessaryMaterialsRecursive(
        materials: { [ item: string ]: number },
        inventory: { [ item: string ]: number },
        allItems: Item[],
    ): { [ item: string ]: number } {
        const necessary: { [ item: string ]: number } = {};

        Object.keys(materials).forEach(materialId => {
            let needed = materials[materialId];

            if (inventory[materialId] && inventory[materialId] > 0) {
                if (inventory[materialId] >= needed) {
                    inventory[materialId] -= needed;
                    needed = 0;
                } else {
                    needed -= inventory[materialId];
                    inventory[materialId] = 0;
                }
            }

            const item = allItems.find(i => i.id === materialId);
            if (!item) {
                console.warn('No item with id', materialId, 'found');
                return;
            }

            if (!Object.keys(item.materials).length) {
                this.addToObject(necessary, { [materialId]: needed });
            } else {
                const neededMaterials: { [ item: string ]: number } = {};
                Object.keys(item.materials).forEach(m => neededMaterials[m] = item.materials[m] * needed);
                this.addToObject(necessary, this.getNecessaryMaterialsRecursive(neededMaterials, inventory, allItems));
            }
        });

        return necessary;
    }

    private addToObject(
        necessary: { [ item: string ]: number },
        newItems: { [ item: string ]: number },
    ): void {
        Object.keys(newItems).forEach(newItem => {
            if (necessary[newItem]) {
                necessary[newItem] += newItems[newItem];
            } else {
                necessary[newItem] = newItems[newItem];
            }
        });
    }
}
