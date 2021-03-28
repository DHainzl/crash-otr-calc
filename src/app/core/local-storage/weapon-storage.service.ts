import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class WeaponStorageService {
    private static readonly STORAGE_KEY = 'weapons';

    constructor(
        private localStorageService: LocalStorageService,
    ) { }

    getWeapons(): { [ materialId: string ]: number } {
        return this.localStorageService.getItem(WeaponStorageService.STORAGE_KEY) ?? {};
    }

    saveWeapons(weapons: { [ materialId: string ]: number }): void {
        this.localStorageService.setItem(WeaponStorageService.STORAGE_KEY, weapons);
    }

    clearWeapons(): void {
        this.localStorageService.removeItem(WeaponStorageService.STORAGE_KEY);
    }
}
