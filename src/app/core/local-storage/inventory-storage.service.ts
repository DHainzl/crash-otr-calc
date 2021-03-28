import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class InventoryStorageService {
    private static readonly STORAGE_KEY = 'inventory';

    constructor(
        private localStorageService: LocalStorageService,
    ) { }

    getInventory(): { [ materialId: string ]: number } {
        return this.localStorageService.getItem(InventoryStorageService.STORAGE_KEY) ?? {};
    }

    saveInventory(inventory: { [ materialId: string ]: number }): void {
        this.localStorageService.setItem(InventoryStorageService.STORAGE_KEY, inventory);
    }

    clearInventory(): void {
        this.localStorageService.removeItem(InventoryStorageService.STORAGE_KEY);
    }
}
