// Import Google Font for Minecraft-like style
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;700&display=swap';
document.head.appendChild(link);

// Minecraft Wiki Database - EXPANDED
const wikiDatabase = {
    blocks: [
        {
            name: "Stone",
            description: "The most common block found throughout the Minecraft world.",
            info: ["Requires pickaxe to mine", "Found at any Y-level", "Drops cobblestone when mined", "Smelt to create smooth stone", "Essential building block", "Blast resistance: 6", "Hardness: 1.5"]
        },
        {
            name: "Dirt",
            description: "Makes up most of the surface terrain and is easily broken.",
            info: ["Harvestable with any tool", "Turns to grass when exposed to light", "Used for farming", "Common in all biomes", "Can support grass and flowers", "Blast resistance: 0.5", "Used for terraforming"]
        },
        {
            name: "Diamond Ore",
            description: "Rare ore found deep underground, drops diamonds when mined.",
            info: ["Found only below Y-level 16", "Requires iron pickaxe or better", "Drops single diamond", "Extremely valuable", "Rare find, very important", "Blast resistance: 3", "Glows slightly when mined", "Most sought after ore"]
        },
        {
            name: "Obsidian",
            description: "Hard black block created when water meets lava source.",
            info: ["Forms from lava+water interaction", "Requires diamond pickaxe", "Cannot be destroyed by explosions", "Used for Nether portals", "Takes 250 seconds to mine", "Blast resistance: 6", "Only way to access Nether", "Generates in strongholds"]
        },
        {
            name: "Grass Block",
            description: "Natural surface block that supports plants and mobs.",
            info: ["Covers most surface areas", "Spreads to adjacent dirt", "Drops dirt when mined", "Supports grass and flowers", "Transparent texture sides", "Needed for trees to grow", "Essential for biomes"]
        },
        {
            name: "Sand",
            description: "Soft granular block found in deserts and beaches.",
            info: ["Falls when unsupported", "Can be smelted into glass", "Found in deserts and beaches", "Affected by gravity", "Used for glass production", "Common in desert biomes"]
        },
        {
            name: "Wood/Logs",
            description: "Renewable resource harvested from trees for crafting.",
            info: ["Essential early game material", "Used for planks", "Different wood types exist", "Found in all forest biomes", "Can be rotated in any direction", "Burns in fire", "Renewable resource"]
        },
        {
            name: "Iron Ore",
            description: "Common ore that smelts into iron ingots.",
            info: ["Found from Y-level 0-72", "Requires stone pickaxe minimum", "Smelt into iron ingots", "Used for tools and armor", "Important progression block", "More common than diamond"]
        },
        {
            name: "Gold Ore",
            description: "Valuable ore that smelts into gold ingots.",
            info: ["Found below Y-level 32", "Requires iron pickaxe", "Rare to find", "Drops as ore when mined", "Smelt into gold ingots", "Used for crafting special items"]
        },
        {
            name: "Lava",
            description: "Flowing molten rock that causes damage.",
            info: ["Creates obsidian with water", "Deals damage to players", "Flows slowly", "Burns wood and other materials", "Found in deep caves", "Infinite source possible"]
        }
    ],
    items: [
        {
            name: "Diamond Pickaxe",
            description: "Best pickaxe for mining all blocks except obsidian level.",
            info: ["Crafted with 3 diamonds + 2 sticks", "Mines stone instantly", "Can mine obsidian", "2,561 uses before breaking", "Most efficient mining tool", "Can be enchanted", "Essential late-game tool"]
        },
        {
            name: "Sword",
            description: "Weapon used for combat dealing increased damage.",
            info: ["Made from wood, stone, iron, diamond, netherite", "Deals extra damage to mobs", "Can have Sharpness enchantment", "Sweeps deal damage to multiple mobs", "Can be used with shield", "Cooldown between hits"]
        },
        {
            name: "Bow",
            description: "Ranged weapon that fires arrows.",
            info: ["Requires arrows to fire", "Can be enchanted with Power, Punch, Flame, Infinity", "Hold right-click to draw", "Full charge for maximum damage", "30 block range", "Useful for hunting mobs"]
        },
        {
            name: "Shield",
            description: "Defensive item that blocks damage.",
            info: ["Crafted from wood + iron ingot", "Held in offhand", "Blocks 50% of damage", "Blocks projectiles", "Can be enchanted", "Breaks after blocking damage"]
        },
        {
            name: "Armor Set",
            description: "Protective clothing made from various materials.",
            info: ["Diamond armor reduces 80% damage", "Made of helmet, chestplate, leggings, boots", "Each piece has durability", "Can be enchanted with Protection", "Higher tier = better protection", "Takes durability damage when hit"]
        },
        {
            name: "Crafting Table",
            description: "3x3 crafting station for complex recipes.",
            info: ["Made from 4 wooden planks", "Allows advanced crafting", "Can be placed anywhere", "Essential for progression", "Recipes shown in game", "Multiple recipes available"]
        },
        {
            name: "Furnace",
            description: "Smelting station for ores and cooking.",
            info: ["Made from 8 cobblestone", "Smelts ore into ingots", "Cooks raw meat", "Requires fuel (coal, wood)", "Burns for varying times", "Can be automated with hoppers"]
        },
        {
            name: "Chest",
            description: "Storage container with 27 inventory slots.",
            info: ["Made from 8 wooden planks", "Double chest has 54 slots", "Items don't despawn inside", "Can be locked with name tag", "Can be enchanted", "Found in generated structures"]
        },
        {
            name: "Food Items",
            description: "Consumable items that restore hunger.",
            info: ["Apple: 4 hunger", "Cooked pork: 8 hunger", "Cooked beef: 8 hunger", "Bread: 5 hunger", "Golden apple: restores health", "Different saturation values"]
        },
        {
            name: "Torch",
            description: "Light source placed on blocks.",
            info: ["Made from coal + stick", "Light level 14", "Prevents mob spawning", "Can be placed on most blocks", "Burns forever", "Essential early game"]
        }
    ],
    mobs: [
        {
            name: "Zombie",
            description: "Common hostile mob spawning at night or dark areas.",
            info: ["Drop rotten flesh", "Burn in sunlight", "Move slowly", "Can break wooden doors on hard difficulty", "Spawn in groups", "20 health points", "Deal 2.5-5 damage"]
        },
        {
            name: "Creeper",
            description: "Iconic hostile mob that explodes when near players.",
            info: ["Spawn in dark areas", "Move silently", "Explode within 3 blocks", "Drop gunpowder", "Most dangerous mob", "Deal 49 damage with explosion", "Green with fuse sound"]
        },
        {
            name: "Enderman",
            description: "Tall black mobs that can teleport and move blocks.",
            info: ["Neutral unless looked at", "Teleport when attacked", "Drop ender pearls", "Move blocks around", "40 health points", "Can be found in all dimensions", "3 block tall"]
        },
        {
            name: "Witch",
            description: "Hostile mobs that drink potions and cast spells.",
            info: ["Drink healing potions", "Throw splash potions", "Drop glowstone dust", "Found in swamps", "45 health points", "Immune to poison", "Hard to kill"]
        },
        {
            name: "Skeleton",
            description: "Hostile mob that shoots arrows.",
            info: ["Spawn in dark areas", "Shoot from distance", "Drop bones and arrows", "Burn in sunlight", "20 health points", "Strafe while shooting", "Can wear armor"]
        },
        {
            name: "Spider",
            description: "Aggressive mob that climbs walls.",
            info: ["Can climb any vertical surface", "16 health points", "Only hostile at night", "Drop string for bows", "Fast movement", "Neutral in daylight", "Can see in darkness"]
        },
        {
            name: "Blaze",
            description: "Hostile flying mob in the Nether.",
            info: ["Shoot fireballs", "Drop blaze rods", "20 health points", "Essential for End progression", "Immune to fire", "Found in Nether fortresses", "3 rods drop per Blaze"]
        },
        {
            name: "Ender Dragon",
            description: "Final boss mob found in the End dimension.",
            info: ["Massive boss fight", "200 health points", "Flies around arena", "Destroys blocks", "Regenerates with crystals", "Drops 12,000 XP", "Defeating ends the game"]
        },
        {
            name: "Villager",
            description: "Peaceful NPC mobs for trading.",
            info: ["Found in villages", "Trade items for emeralds", "Different professions", "Can breed with beds", "Protect their area", "Can be cured if zombified", "Essential for trading"]
        },
        {
            name: "Passive Mobs",
            description: "Animals that provide food and materials.",
            info: ["Sheep: drop wool", "Cow: drop beef and leather", "Pig: drop pork", "Chicken: drop eggs and chicken", "Horse: rideable mobs", "Can be bred with food"]
        }
    ],
    biomes: [
        {
            name: "Plains",
            description: "Flat, grassy biome perfect for building and farming.",
            info: ["Flat terrain perfect for building", "Grass blocks everywhere", "Few trees", "Horses and sheep spawn", "Villages generate here", "Peaceful atmosphere", "Great for starting base", "Suitable for farms"]
        },
        {
            name: "Forest",
            description: "Dense forest biome with lots of wood and resources.",
            info: ["Tall oak and birch trees", "Wolves spawn here", "Bees and bee nests", "Dark area with shade", "Great wood source", "Mushrooms in dark areas", "Flower forests variation", "Recommended for logging"]
        },
        {
            name: "Desert",
            description: "Hot sandy biome with temples and villages.",
            info: ["Sand and sandstone", "Desert temples with loot", "Desert villages", "No water or trees", "Hot climate", "Rabbits spawn", "No rain", "Dangerous during day"]
        },
        {
            name: "Mountains",
            description: "Tall rocky biome with high peaks and caves.",
            info: ["High elevation terrain", "Lots of stone and ore", "Goats spawn here", "Waterfalls common", "Mountain caves", "Dangerous heights", "Great for mining", "Varied landscape"]
        },
        {
            name: "Ocean",
            description: "Large water biome with underwater structures.",
            info: ["Deep water", "Ocean monuments", "Guardians spawn", "Drowned mobs", "Kelp and seaweed", "Shipwrecks generate", "Buried treasure", "Ocean temples"]
        },
        {
            name: "Jungle",
            description: "Dense tropical biome with tall trees and temples.",
            info: ["Tallest trees in game", "Jungle temples", "Vines on trees", "Ocelots and pandas", "Dense foliage", "Hard to navigate", "Melons and cocoa", "Beautiful scenery"]
        },
        {
            name: "Savanna",
            description: "Grassland biome with scattered trees and animals.",
            info: ["Tall grass everywhere", "Acacia trees", "Horses abundant", "Flat terrain", "Villages generate", "Hot climate", "Good for grazing", "Brown terrain"]
        },
        {
            name: "Swamp",
            description: "Wet marshy biome with water and special plants.",
            info: ["Water and mud", "Witches spawn", "Lily pads", "Mangrove trees", "Dark and murky", "Slimes spawn at night", "Mushrooms present", "Dangerous terrain"]
        },
        {
            name: "Nether",
            description: "Dangerous dimension with lava and unique blocks.",
            info: ["Made of netherrack", "Lava everywhere", "No water", "Hostile mobs", "1 block = 8 blocks overworld", "Nether fortresses", "Nether wastes", "Very dangerous"]
        },
        {
            name: "The End",
            description: "Dark dimension where Ender Dragon resides.",
            info: ["Void below", "End stone blocks", "Ender dragon boss", "End crystals", "End cities", "Endermen everywhere", "Purple particles", "Game ending dimension"]
        }
    ],
    crafting: [
        {
            name: "Wooden Planks",
            description: "Basic block made from wood logs.",
            info: ["1 log = 4 planks", "Made in inventory", "Foundation of crafting", "Used in most recipes", "Different wood types", "Burnable fuel", "Renewable resource"]
        },
        {
            name: "Sticks",
            description: "Essential crafting material from wooden planks.",
            info: ["2 planks = 4 sticks", "Used in pickaxes, swords", "Needed for torches", "Essential early game", "Renewable source", "Multiple recipes need sticks"]
        },
        {
            name: "Crafting Table",
            description: "Advanced crafting station with 3x3 grid.",
            info: ["4 wooden planks = crafting table", "Enables complex recipes", "Can place anywhere", "Can be destroyed and moved", "Essential for progression", "Found in villages"]
        },
        {
            name: "Furnace",
            description: "Smelting station for ores and cooking food.",
            info: ["8 cobblestone blocks", "Smelts ore into ingots", "Cooks raw meat", "Burns for variable time", "Found in structures", "Can be automated"]
        },
        {
            name: "Chest",
            description: "Storage container for inventory.",
            info: ["8 wooden planks", "27 slot storage", "Double chests = 54 slots", "Can be locked", "Found in structures", "Essential for organization"]
        },
        {
            name: "Pickaxe",
            description: "Tool for mining stone and ore.",
            info: ["3 planks/stone/iron/diamond + 2 sticks", "Different tiers mine different blocks", "Essential for progression", "Has durability", "Can be enchanted", "Every tier better than last"]
        },
        {
            name: "Sword",
            description: "Weapon for combat.",
            info: ["2 planks/stone/iron/diamond + 1 stick", "Deals damage to mobs", "Can sweep attack", "Fast attack speed", "Can be enchanted"]
        },
        {
            name: "Armor",
            description: "Protective equipment.",
            info: ["Helmet, chestplate, leggings, boots", "Made from various materials", "Higher tier = more protection", "Can be enchanted", "Takes durability damage"]
        },
        {
            name: "Door",
            description: "Blocks mobs from entering areas.",
            info: ["6 wooden planks = 1 door", "Can be opened/closed", "Zombies can break wooden doors", "Iron doors need redstone", "Multiple types available"]
        },
        {
            name: "Bed",
            description: "Sleep to set spawn and skip night.",
            info: ["3 planks + 3 wool", "Allows sleeping through night", "Sets spawn point", "Required for breeding", "Multiple colors available"]
        }
    ],
    enchantments: [
        {
            name: "Sharpness",
            description: "Increases melee damage of swords and axes.",
            info: ["5 levels (I-V)", "1.25 damage per level", "Most important sword enchantment", "Stack with critical hits", "Works on axes too", "Enchanting table or anvil"]
        },
        {
            name: "Protection",
            description: "Reduces damage taken by wearer.",
            info: ["4 levels (I-IV)", "4% reduction per level", "Works on all armor", "Stacks with other protections", "Enchanting table source", "Essential for safety"]
        },
        {
            name: "Unbreaking",
            description: "Increases tool and armor durability.",
            info: ["3 levels (I-III)", "Reduces durability loss", "Works on all tools", "Most durable items with III", "Found in enchanting table", "Crucial for late game"]
        },
        {
            name: "Mending",
            description: "Uses XP to repair items automatically.",
            info: ["Only 1 level", "Repairs with collected XP", "Found only in loot", "Most valuable enchantment", "Works on held/equipped items", "Game changer for tools"]
        },
        {
            name: "Power",
            description: "Increases bow damage.",
            info: ["5 levels (I-V)", "0.5 damage per level", "Can kill mobs instantly", "Makes arrows instant kill", "Found in enchanting table"]
        },
        {
            name: "Punch",
            description: "Increases arrow knockback.",
            info: ["2 levels (I-II)", "Knocks back targets far", "Useful for combat", "Can knock mobs off cliffs"]
        },
        {
            name: "Flame",
            description: "Makes arrows set mobs on fire.",
            info: ["Only 1 level", "Arrows ignite targets", "8 seconds of fire damage", "Deals extra damage overall"]
        },
        {
            name: "Infinity",
            description: "Arrows never consume from inventory.",
            info: ["Only 1 level", "Unlimited arrows", "Need 1 arrow to shoot", "Incompatible with Mending", "Breaks normal arrow economy"]
        },
        {
            name: "Knockback",
            description: "Increases melee knockback.",
            info: ["2 levels (I-II)", "Knocks back targets", "Useful for combat", "Can knock off cliffs"]
        },
        {
            name: "Looting",
            description: "Increases mob loot drops.",
            info: ["3 levels (I-III)", "More items from mobs", "Increases rare drops", "Great for grinding"]
        }
    ],
    dimensions: [
        {
            name: "Overworld",
            description: "Main dimension where players spawn.",
            info: ["Default spawn location", "All biomes available", "Day/night cycle", "Weather system", "Most content here", "Safest dimension", "Where you start", "Standard gameplay"]
        },
        {
            name: "Nether",
            description: "Fiery dimension filled with lava and hostile mobs.",
            info: ["Accessed via obsidian portals", "1 block = 8 blocks in Overworld", "No water (turns to steam)", "Nether fortresses", "Unique hostile mobs", "Dangerous terrain", "Essential for progression", "Contains ancient debris"]
        },
        {
            name: "The End",
            description: "Dark dimension with the Ender Dragon.",
            info: ["Accessed through strongholds", "Surrounded by void", "Ender Dragon boss fight", "End cities with loot", "Endermen everywhere", "Purple particles", "Winning dimension", "Final challenge"]
        }
    ],
    structures: [
        {
            name: "Village",
            description: "NPC settlements with trading opportunities.",
            info: ["Multiple building types", "Different biome variations", "Villagers for trading", "Crops and livestock", "Raid events possible", "Can be expanded", "Multiple professions", "Valuable resources"]
        },
        {
            name: "Dungeon",
            description: "Underground structures with mobs and treasure.",
            info: ["Spawners and hostile mobs", "Loot chests", "Random locations", "Multiple loot tables", "Early game loot", "Good for farming", "Contain valuable items"]
        },
        {
            name: "Stronghold",
            description: "Rare structures containing the End portal.",
            info: ["Located with Eyes of Ender", "Deep underground", "Multiple rooms", "End portal room", "Valuable loot", "Hostile mobs inside", "Essential for End access", "Found 1,200 blocks away"]
        },
        {
            name: "Nether Fortress",
            description: "Structures in Nether with Blazes.",
            info: ["Made of nether brick", "Spawn Blazes", "Blaze rods necessary", "Multiple corridors", "Treasure loot", "Dangerous environment", "Essential progression", "Navigation difficult"]
        },
        {
            name: "Ocean Monument",
            description: "Underwater structures with Guardians.",
            info: ["Contains treasure", "Guardians spawn inside", "Prismarine blocks", "Hard to navigate", "Deep water", "Valuable loot", "Dark Prismarine"]
        },
        {
            name: "Jungle Temple",
            description: "Jungle structures with traps and treasure.",
            info: ["Dangerous traps", "Multiple levels", "Valuable loot", "Puzzles to solve", "Redstone contraptions", "Pressure plates", "Hidden chambers"]
        },
        {
            name: "Desert Temple",
            description: "Desert pyramids with loot and traps.",
            info: ["TNT traps", "Gold blocks inside", "Valuable loot", "Treasure chests", "Trap system", "Sandstone construction"]
        },
        {
            name: "Nether Citadel",
            description: "Crimson forests with buildings.",
            info: ["New dimension structure", "Multiple rooms", "Valuable materials", "New mobs", "Exploration reward"]
        },
        {
            name: "End City",
            description: "Floating cities in The End.",
            info: ["Contains endstone", "Elytra found here", "Shulker boxes", "High altitude", "Treasure loot", "Tall structures", "Worth exploring"]
        },
        {
            name: "Shipwreck",
            description: "Sunken ships in oceans.",
            info: ["Multiple variants", "Treasure maps", "Valuable items", "Underwater exploration", "Maps to treasure"]
        }
    ],
    mechanics: [
        {
            name: "Hunger System",
            description: "Tracks hunger and health regeneration.",
            info: ["10 hunger points (drumsticks)", "Regenerates health when full", "Depletes with activity", "Restored by eating", "Sprinting costs hunger", "Healing uses hunger", "Peaceful = auto-regenerate"]
        },
        {
            name: "Experience & Leveling",
            description: "XP system for progression.",
            info: ["Earned from killing mobs", "Smelting and mining give XP", "Used for enchanting", "Mending consumes XP", "Levels increase with exp", "Enchanting cost increases by level", "Max level 30 for full enchant"]
        },
        {
            name: "Damage System",
            description: "How damage is calculated and applied.",
            info: ["Different damage sources", "Armor reduces damage %", "Enchantments add protection", "Fall damage based on height", "Critical hits from jumps", "Knockback mechanics", "Invulnerability timer"]
        },
        {
            name: "Spawn System",
            description: "How mobs spawn in the world.",
            info: ["Requires darkness (light 0-7)", "Mob cap limits total mobs", "Spawner blocks force spawn", "Peaceful prevents all", "Spawn chunks always loaded", "Render distance matters", "Y-level dependent"]
        },
        {
            name: "Block Updates",
            description: "How blocks react to changes.",
            info: ["Physics engine", "Gravity affects sand/gravel", "Water flow mechanics", "Lava spread behavior", "Redstone propagation", "Block states", "Update order matters"]
        },
        {
            name: "Crafting System",
            description: "How recipes are discovered and used.",
            info: ["Pattern-based recipes", "3x3 grid in table", "Recipe book available", "Shaped vs shapeless", "Custom recipes possible", "Hidden recipes", "Recipe unlocking"]
        },
        {
            name: "Enchanting",
            description: "Adding magical properties to items.",
            info: ["Enchanting table required", "Experience cost", "Level 30 max enchant", "Multiple enchantments", "Anvil combines enchants", "Incompatible enchants", "Curse of vanishing/binding"]
        },
        {
            name: "Brewing",
            description: "Creating potions with various effects.",
            info: ["Brewing stand required", "Base ingredients needed", "Modifier ingredients", "Multiple effect combinations", "Splash vs regular", "Lingering potions", "Duration and power tiers"]
        },
        {
            name: "Redstone",
            description: "Electrical mechanics system.",
            info: ["Transmits up to 15 blocks", "Power on/off states", "Comparators logic gates", "Repeaters add delay", "Pistons move blocks", "Dust carries signal", "Pulse vs continuous"]
        },
        {
            name: "Death & Respawn",
            description: "What happens when you die.",
            info: ["Items drop at death location", "Items despawn after 5 minutes", "Respawn at spawn point", "Bed sets new spawn", "Hardcore = permanent death", "Can recover items", "Death message sent to chat"]
        }
    ],
    potions: [
        {
            name: "Potion of Healing",
            description: "Instantly restores health.",
            info: ["Made with Glistering Melon", "Restores 4 health", "Level II restores 8", "Damages undead", "Instant effect", "Splash version throws"]
        },
        {
            name: "Potion of Strength",
            description: "Increases melee damage.",
            info: ["Made with Blaze Powder", "Adds 3 damage level I", "Lasts 3 minutes", "Stacks with other damage", "Useful in combat", "Can be extended"]
        },
        {
            name: "Potion of Invisibility",
            description: "Makes player invisible to mobs.",
            info: ["Made from Night Vision", "Mobs cannot see", "Still take damage", "Equipment still visible", "3 minute duration", "Useful for escape"]
        },
        {
            name: "Potion of Fire Resistance",
            description: "Protects from fire and lava.",
            info: ["Made with Magma Cream", "No fire damage", "Lava swim possible", "Essential for Nether", "3 minute duration", "Can eat hot food"]
        },
        {
            name: "Potion of Swiftness",
            description: "Increases movement speed.",
            info: ["Made with Sugar", "20% faster movement", "Lasts 3 minutes", "Stacks with itself", "Useful for travel", "Multiple tiers"]
        },
        {
            name: "Potion of Slowness",
            description: "Decreases movement speed.",
            info: ["Negative effect", "Slows by 15%", "Used in traps", "Useful offensively", "Curse type potion"]
        },
        {
            name: "Potion of Night Vision",
            description: "Allows seeing in darkness.",
            info: ["Made with Golden Carrot", "See perfectly in darkness", "Lasts 3 minutes", "Blocks appear slightly yellow", "Useful in caves"]
        },
        {
            name: "Potion of Water Breathing",
            description: "Breathe underwater indefinitely.",
            info: ["Made with Pufferfish", "Allows underwater survival", "3 minute duration", "Essential for underwater", "Can see better underwater"]
        },
        {
            name: "Potion of Poison",
            description: "Damages over time.",
            info: ["Made with Fermented Spider Eye", "Deals damage per tick", "Doesn't kill on hard", "Useful in PvP", "Stacks with itself"]
        },
        {
            name: "Potion of Weakness",
            description: "Reduces melee damage.",
            info: ["Made with Fermented Spider Eye", "Reduces damage by 4", "Useful against mobs", "Can cripple enemies"]
        }
    ],
    tools: [
        {
            name: "Pickaxe",
            description: "Essential mining tool for stone and ore.",
            info: ["6 material tiers exist", "Wood < Stone < Iron < Gold < Diamond < Netherite", "Different speeds per tier", "Can mine obsidian only with diamond+", "12,500 uses (diamond)", "Tool with most uses"]
        },
        {
            name: "Axe",
            description: "Fast wood chopping tool.",
            info: ["Good for wood blocks", "Weapon capability", "Can disable shields", "Faster than pickaxe for wood", "Useful two-purpose tool", "Heavy weapons"]
        },
        {
            name: "Shovel",
            description: "Fast digging for soft blocks.",
            info: ["Fastest for dirt/sand", "Creates pathways", "Can extinguish fire", "Less useful overall", "Good early game", "Limited applications"]
        },
        {
            name: "Hoe",
            description: "Farming and soil preparation.",
            info: ["Tills grass to farmland", "Required for planting", "Breaks leaves quickly", "Weapon on newer versions", "Necessary for farming", "Breaks crops when jumped on"]
        },
        {
            name: "Sword",
            description: "Primary combat weapon.",
            info: ["6 material tiers", "Deals most damage", "Sweep attack damages multiple", "Can block with shield", "Cooldown between hits", "Critical hits possible"]
        },
        {
            name: "Bow",
            description: "Ranged combat weapon.",
            info: ["Shoots arrows", "Multiple enchantments", "Full draw = max damage", "Infinite with Infinity", "Punch knocks back", "Power increases damage"]
        },
        {
            name: "Trident",
            description: "Unique underwater weapon.",
            info: ["Ranged weapon", "Can be thrown", "Returns like boomerang", "Conducts lightning", "Rare drop from Drowned", "Exclusive weapon"]
        },
        {
            name: "Crossbow",
            description: "Advanced ranged weapon.",
            info: ["Faster loading than bow", "Can load multiple arrows", "Fire multiple at once", "Shoots farther", "Newer weapon", "Good in combat"]
        },
        {
            name: "Shield",
            description: "Defensive equipment.",
            info: ["Blocks 50% damage", "Blocks projectiles", "Holds in offhand", "Knockback reduction", "Durability limited", "Can be enchanted"]
        },
        {
            name: "Armor",
            description: "Protective body equipment.",
            info: ["Helmet, chest, legs, boots", "Diamond 80% reduction", "More armor = protection", "Has durability", "Can be repaired", "Shows enchantments"]
        }
    ],
    redstone: [
        {
            name: "Redstone Dust",
            description: "Conductive material for circuits.",
            info: ["Transmits power 15 blocks", "Can be turned on/off", "Powers nearby blocks", "Used in complex machines", "Found deep underground", "Drops from redstone ore", "Multiple placement patterns"]
        },
        {
            name: "Redstone Repeater",
            description: "Repeats and delays signals.",
            info: ["1-4 ticks delay", "Prevents decay", "Useful for timing", "Can be locked", "Front and side input", "Holds signal briefly"]
        },
        {
            name: "Redstone Comparator",
            description: "Compares redstone signals.",
            info: ["Two modes: compare/subtract", "Logic circuit component", "Detects container contents", "Advanced redstone", "Powers if input > side", "Complicated mechanics"]
        },
        {
            name: "Piston",
            description: "Moves blocks with redstone.",
            info: ["Extends when powered", "Moves 1 block", "Sticky pistons pull", "Multiple uses", "Fast contraptions", "Breaks some blocks"]
        },
        {
            name: "Lever",
            description: "On/off switch for redstone.",
            info: ["Toggle on/off", "Produces constant signal", "Can be rotated", "Simple control device", "Powers adjacent blocks"]
        },
        {
            name: "Button",
            description: "Momentary switch.",
            info: ["Activates for 1 second", "Wooden vs stone variants", "Arrow activates", "Quick activation", "Mob-proof button exists"]
        },
        {
            name: "Pressure Plate",
            description: "Detects mobs and players.",
            info: ["Activates when stepped on", "Different types available", "Weighted plates exist", "Mobs and players detected", "Used in traps"]
        },
        {
            name: "Redstone Torch",
            description: "Light source and inverter.",
            info: ["Provides light level 7", "Inverts signal", "Key component", "Always on unless blocked", "Used in many circuits"]
        },
        {
            name: "Hopper",
            description: "Item transfer system.",
            info: ["Moves items between blocks", "Powered to disable", "Useful for automation", "5-item capacity", "Can pull/push items"]
        },
        {
            name: "Dispenser",
            description: "Shoots out items.",
            info: ["Randomized direction", "Activated by redstone", "Shoots arrows", "Useful in machines", "Many applications"]
        }
    ]
};

// Create Click VFX - Block Breaking Effect
function createBlockBreakEffect(x, y) {
    const container = document.createElement('div');
    container.className = 'click-vfx';
    container.style.left = x + 'px';
    container.style.top = y + 'px';
    document.body.appendChild(container);

    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        const angle = (Math.PI * 2 * i) / 12;
        const distance = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        const colors = ['#7c3aed', '#3b82f6', '#a78bfa', '#60a5fa'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.background = color;
        particle.style.width = '12px';
        particle.style.height = '12px';
        particle.style.borderRadius = '2px';
        particle.style.position = 'absolute';
        particle.style.left = '0';
        particle.style.top = '0';
        particle.style.animation = `burstOut ${0.5 + Math.random() * 0.3}s ease-out forwards`;
        container.appendChild(particle);
    }

    const ring = document.createElement('div');
    ring.className = 'pulse-ring';
    ring.style.left = '-50px';
    ring.style.top = '-50px';
    ring.style.borderColor = '#7c3aed';
    container.appendChild(ring);

    setTimeout(() => container.remove(), 800);
}

function createHitParticles(x, y) {
    const container = document.createElement('div');
    container.className = 'click-vfx';
    container.style.left = x + 'px';
    container.style.top = y + 'px';
    document.body.appendChild(container);

    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        const angle = (Math.PI * 2 * i) / 8;
        const distance = 30 + Math.random() * 40;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance - 20;
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.position = 'absolute';
        particle.style.left = '0';
        particle.style.top = '0';
        particle.style.width = '20px';
        particle.style.height = '20px';
        particle.style.display = 'flex';
        particle.style.alignItems = 'center';
        particle.style.justifyContent = 'center';
        particle.style.fontSize = '12px';
        particle.style.fontWeight = 'bold';
        particle.style.color = '#ff6b9d';
        particle.style.textShadow = '0 0 5px #7c3aed';
        particle.style.animation = `floatUp ${0.8 + Math.random() * 0.4}s ease-out forwards`;
        particle.textContent = '✦';
        container.appendChild(particle);
    }

    setTimeout(() => container.remove(), 1200);
}

document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.cursor-glow');
    glow.style.left = (e.clientX - 200) + 'px';
    glow.style.top = (e.clientY - 200) + 'px';
});

document.addEventListener('click', (e) => {
    createBlockBreakEffect(e.clientX, e.clientY);
    if (Math.random() > 0.5) {
        setTimeout(() => createHitParticles(e.clientX, e.clientY), 100);
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function searchWiki(query) {
    if (!query.trim()) {
        searchResults.classList.add('hidden');
        return;
    }

    const results = [];
    const lowerQuery = query.toLowerCase();

    Object.keys(wikiDatabase).forEach(category => {
        wikiDatabase[category].forEach(item => {
            if (item.name.toLowerCase().includes(lowerQuery) || 
                item.description.toLowerCase().includes(lowerQuery)) {
                results.push({ ...item, category });
            }
        });
    });

    if (results.length === 0) {
        searchResults.innerHTML = '<p class="content-display empty">No results found</p>';
    } else {
        searchResults.innerHTML = results.map(result => `
            <div class="search-result-item" data-name="${result.name}" data-category="${result.category}">
                <h4>${result.name}</h4>
                <p>${result.description.substring(0, 100)}...</p>
                <small style="color: #a78bfa;">📁 ${result.category}</small>
            </div>
        `).join('');
    }

    searchResults.classList.remove('hidden');

    document.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
            const name = item.getAttribute('data-name');
            const category = item.getAttribute('data-category');
            displayContent(category, name);
        });
    });
}

searchInput.addEventListener('input', (e) => {
    searchWiki(e.target.value);
});

function displayContent(category, specificItem = null) {
    const contentDisplay = document.getElementById('contentDisplay');
    
    if (!wikiDatabase[category]) {
        contentDisplay.innerHTML = '<p class="content-display empty">Category not found</p>';
        return;
    }

    let items = wikiDatabase[category];
    if (specificItem) {
        items = items.filter(item => item.name === specificItem);
    }

    if (items.length === 0) {
        contentDisplay.innerHTML = '<p class="content-display empty">No items found</p>';
        return;
    }

    contentDisplay.innerHTML = items.map(item => `
        <div class="content-item">
            <h3>🎮 ${item.name}</h3>
            <p>${item.description}</p>
            <strong style="color: #a78bfa;">Key Information:</strong>
            <ul>
                ${item.info.map(info => `<li>${info}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    contentDisplay.classList.remove('empty');
}

document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', (e) => {
        createBlockBreakEffect(e.clientX, e.clientY);
        const category = card.getAttribute('data-category');
        displayContent(category);
        setTimeout(() => {
            document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    });
});

document.querySelector('.cta-button')?.addEventListener('click', (e) => {
    createBlockBreakEffect(e.clientX, e.clientY);
    setTimeout(() => {
        document.querySelector('#categories').scrollIntoView({ behavior: 'smooth' });
    }, 100);
});

document.querySelector('.logo')?.addEventListener('click', (e) => {
    createBlockBreakEffect(e.clientX, e.clientY);
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
    displayContent('blocks');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.category-card, .about-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});