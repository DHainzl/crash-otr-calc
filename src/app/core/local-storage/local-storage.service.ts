import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    getItem<T>(key: string): T | undefined {
        const data = localStorage.getItem(key);
        if (!data) {
            return undefined;
        }
        return JSON.parse(data);
    }

    setItem<T>(key: string, item: T): void {
        localStorage.setItem(key, JSON.stringify(item));
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}
