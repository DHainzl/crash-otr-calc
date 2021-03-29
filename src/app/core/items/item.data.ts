import { Item } from './item.interface';

const nitroItems: Item[] = [
    // Ingredients
    {
        id: 'glow-bark',
        name: 'Glow Bark',
        type: 'ingredient',
        iconPath: 'materials/Glowbark.png',
        materials: {},
    },
    {
        id: 'nitric-fungus',
        name: 'Nitric Fungus',
        type: 'ingredient',
        iconPath: 'materials/NitrusFungus.png',
        materials: {},
    },
    {
         id: 'pop-blossom',
         name: 'Pop Blossom',
         type: 'ingredient',
         iconPath: 'materials/PopBlossom.png',
         materials: {},
    },
    {
        id: 'wiggle-weed',
        name: 'Wiggle Weed',
        type: 'ingredient',
        iconPath: 'materials/wiggle_weed.png',
        materials: {},
    },
    // Eggs
    {
        id: 'glowy-egg',
        name: 'Glowy Egg',
        type: 'egg',
        iconPath: 'eggs/egg_nitro.png',
        materials: {
            'pop-blossom': 8,
        },
    },
    // Weapons
    {
        id: 'nitro-serum',
        name: 'Nitro Serum',
        type: 'weapon',
        iconPath: 'weapons/serum_nitro.png',
        materials: {
            'wumpa-fruit': 50,
            'glow-bark': 4,
        },
    },
    {
        id: 'nitro-bomb',
        name: 'Nitro Bomb',
        type: 'weapon',
        iconPath: 'weapons/bomb_nitro.png',
        materials: {
            'wumpa-fruit': 130,
            'glow-bark': 8,
            'nitric-fungus': 8,
        },
    },
    {
        id: 'nitro-raygun',
        name: 'Nitro Raygun',
        type: 'weapon',
        iconPath: 'weapons/raygun_nitro.png',
        materials: {
            'wumpa-fruit': 250,
            'nitric-fungus': 15,
            'glowy-egg': 2,
        },
    },
    {
        id: 'nitro-bazooka',
        name: 'Nitro Bazooka',
        type: 'weapon',
        iconPath: 'weapons/bazooka_nitro.png',
        materials: {
            'nitric-fungus': 10,
            'glowy-egg': 5,
            'wiggle-weed': 25,
        },
    },
];

const frostyItems: Item[] = [
    // Ingredients
    {
        id: 'chill-berry',
        name: 'Chill Berry',
        type: 'ingredient',
        iconPath: 'materials/ChillBerry.png',
        materials: {},
    },
    {
        id: 'shell-shard',
        name: 'Shell Shard',
        type: 'ingredient',
        iconPath: 'materials/ShellShard.png',
        materials: {},
    },
    {
        id: 'brain-freeze',
        name: 'Brain Freeze',
        type: 'ingredient',
        iconPath: 'materials/BrainFreeze.png',
        materials: {},
    },
    {
         id: 'snow-cabbage',
         name: 'Snow Cabbage',
         type: 'ingredient',
         iconPath: 'materials/SnowCabbage.png',
         materials: {},
    },
    // Eggs
    {
        id: 'snow-egg',
        name: 'Snow Egg',
        type: 'egg',
        iconPath: 'eggs/egg_frosty.png',
        materials: {
            'chill-berry': 9,
        },
    },
    // Weapons
    {
        id: 'frosty-serum',
        name: 'Frosty Serum',
        type: 'weapon',
        iconPath: 'weapons/serum_frosty.png',
        materials: {
            'wumpa-fruit': 150,
            'chill-berry': 2,
            'shell-shard': 6,
        },
    },
    {
        id: 'frosty-bomb',
        name: 'Frosty Bomb',
        type: 'weapon',
        iconPath: 'weapons/bomb_frosty.png',
        materials: {
            'wumpa-fruit': 250,
            'snow-egg': 1,
            'shell-shard': 4,
        },
    },
    {
        id: 'frosty-raygun',
        name: 'Frosty Raygun',
        type: 'weapon',
        iconPath: 'weapons/raygun_frosty.png',
        materials: {
            'wumpa-fruit': 350,
            'snow-egg': 4,
            'shell-shard': 8,
        },
    },
    {
        id: 'frosty-bazooka',
        name: 'Frosty Bazooka',
        type: 'weapon',
        iconPath: 'weapons/bazooka_frosty.png',
        materials: {
            'brain-freeze': 18,
            'snow-cabbage': 25,
            'snow-egg': 6,
        },
    },
];

const infernoItems: Item[] = [
    // Ingredients
    {
        id: 'inferno-orb',
        name: 'Inferno Orb',
        type: 'ingredient',
        iconPath: 'materials/InfernoOrb.png',
        materials: {},
    },
    {
        id: 'magma-chunk',
        name: 'Magma Chunk',
        type: 'ingredient',
        iconPath: 'materials/MagmaChunk.png',
        materials: {},
    },
    {
        id: 'red-eyes',
        name: 'Red Eyes',
        type: 'ingredient',
        iconPath: 'materials/RedEyes.png',
        materials: {},
    },
    {
         id: 'hot-hot-shroom',
         name: 'Hot Hot Shroom',
         type: 'ingredient',
         iconPath: 'materials/HotHotShroom.png',
         materials: {},
    },
    // Eggs
    {
        id: 'cinder-egg',
        name: 'Cinder Egg',
        type: 'egg',
        iconPath: 'eggs/egg_inferno.png',
        materials: {
            'inferno-orb': 6,
        },
    },
    // Weapons
    {
        id: 'inferno-serum',
        name: 'Inferno Serum',
        type: 'weapon',
        iconPath: 'weapons/serum_inferno.png',
        materials: {
            'wumpa-fruit': 180,
            'inferno-orb': 5,
            'magma-chunk': 9,
        },
    },
    {
        id: 'inferno-bomb',
        name: 'Inferno Bomb',
        type: 'weapon',
        iconPath: 'weapons/bomb_inferno.png',
        materials: {
            'wumpa-fruit': 350,
            'magma-chunk': 6,
            'cinder-egg': 2,
        },
    },
    {
        id: 'inferno-raygun',
        name: 'Inferno Raygun',
        type: 'weapon',
        iconPath: 'weapons/raygun_inferno.png',
        materials: {
            'wumpa-fruit': 500,
            'cinder-egg': 3,
            'red-eyes': 15,
        },
    },
    {
        id: 'inferno-bazooka',
        name: 'Inferno Bazooka',
        type: 'weapon',
        iconPath: 'weapons/bazooka_inferno.png',
        materials: {
            'cinder-egg': 6,
            'red-eyes': 15,
            'hot-hot-shroom': 15,
        },
    },
];

const oxideItems: Item[] = [
    // Ingredients
    {
        id: 'atom-stone',
        name: 'Atom Stone',
        type: 'ingredient',
        iconPath: 'materials/AtomStone.png',
        materials: {},
    },
    {
        id: 'bellow-pepper',
        name: 'Bellow Pepper',
        type: 'ingredient',
        iconPath: 'materials/BellowPepper.png',
        hidden: true,
        materials: {},
    },
    {
        id: 'fizzle-flake',
        name: 'Fizzle Flake',
        type: 'ingredient',
        iconPath: 'materials/FizzleFlake.png',
        hidden: true,
        materials: {},
    },
    // Eggs
    {
        id: 'atom-egg',
        name: 'Atom Egg',
        type: 'egg',
        iconPath: 'eggs/AtomEgg.png',
        materials: {
            'atom-stone': 6,
        },
    },
    // Weapons
    {
        id: 'oxide-serum',
        name: 'Oxide Serum',
        type: 'weapon',
        iconPath: 'weapons/serum_oxide.png',
        hidden: true,
        materials: {
        },
    },
    {
        id: 'oxide-bomb',
        name: 'Oxide Bomb',
        type: 'weapon',
        iconPath: 'weapons/bomb_oxide.png',
        hidden: true,
        materials: {
        },
    },
    {
        id: 'oxide-raygun',
        name: 'Oxide Raygun',
        type: 'weapon',
        iconPath: 'weapons/raygun_oxide.png',
        hidden: true,
        materials: {
        },
    },
    {
        id: 'oxide-bazooka',
        name: 'Oxide Bazooka',
        type: 'weapon',
        iconPath: 'weapons/bazooka_oxide.png',
        hidden: true,
        materials: {
        },
    },
];

const allItems: Item[] = [
    {
        id: 'wumpa-fruit',
        name: 'Wumpa Fruit',
        type: 'ingredient',
        iconPath: 'materials/WumpaFruit.png',
        materials: {},
    },
    ...nitroItems,
    ...frostyItems,
    ...infernoItems,
    ...oxideItems,
];

export {
    nitroItems,
    frostyItems,
    infernoItems,
    oxideItems,
    allItems,
};
