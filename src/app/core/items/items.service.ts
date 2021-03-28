import { Injectable } from '@angular/core';
import { Item } from './item.interface';

import { allItems, frostyItems, infernoItems, nitroItems, oxideItems } from './item.data';

@Injectable({ providedIn: 'root' })
export class ItemsService {
    public getAllItems(): Item[] {
        return allItems.filter(item => this.removeHidden(item));
    }

    public getNitroItems(): Item[] {
        return nitroItems.filter(item => this.removeHidden(item));
    }

    public getFrostyItems(): Item[] {
        return frostyItems.filter(item => this.removeHidden(item));
    }

    public getInfernoItems(): Item[] {
        return infernoItems.filter(item => this.removeHidden(item));
    }

    public getOxideItems(): Item[] {
        return oxideItems.filter(item => this.removeHidden(item));
    }

    private removeHidden(item: Item): boolean {
        return !item.hidden;
    }
}
