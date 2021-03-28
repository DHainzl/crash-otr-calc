export type ItemType = 'ingredient' | 'egg' | 'weapon';

export interface Item {
    id: string;
    name: string;
    type: ItemType;
    hidden?: boolean;
    iconPath: string;       // Relative to assets/game-icons/
    materials: { [ itemId: string ]: number };
}
