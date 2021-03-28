import { ItemsService } from '../items/items.service';
import { InventoryStorageService } from '../local-storage/inventory-storage.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { WeaponStorageService } from '../local-storage/weapon-storage.service';
import { CalculationService } from './calculation.service';

describe('Calculation Service', () => {
    // TODO Change to use angular di framework ...
    const localStorageService = new LocalStorageService();
    const inventoryStorageService = new InventoryStorageService(localStorageService);
    const weaponStorageService = new WeaponStorageService(localStorageService);
    const service = new CalculationService(new ItemsService(), inventoryStorageService, weaponStorageService);

    it('should return nothing when nothing is passed in', () => {
        const inventory = {};
        const weapons = {};

        const result = service._getNecessaryMaterials(weapons, inventory);

        expect(result).toEqual({});
    });

    it('should return all mats needed for an item', () => {
        const inventory = {};
        const weapons = { 'nitro-serum': 2 };

        const result = service._getNecessaryMaterials(weapons, inventory);

        expect(result).toEqual({
            'wumpa-fruit': 100,
            'glow-bark': 8,
        });
    });

    it('should return only raw mats',  () => {
        const inventory = {};
        const weapons = { 'nitro-raygun': 2 };

        const result = service._getNecessaryMaterials(weapons, inventory);

        expect(result).toEqual({
            'wumpa-fruit': 500,
            'nitric-fungus': 30,
            'pop-blossom': 32,
        });
    });

    it('should deduct inventory stuff accordingly',  () => {
        const inventory = {
            'nitro-raygun': 1,
            'nitric-fungus': 15,
            'glowy-egg': 2
        };
        const weapons = { 'nitro-raygun': 3 };

        const result = service._getNecessaryMaterials(weapons, inventory);

        expect(result).toEqual({
            'wumpa-fruit': 500,
            'nitric-fungus': 15,
            'pop-blossom': 16,
        });
    });
});
