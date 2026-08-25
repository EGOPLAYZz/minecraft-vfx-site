// Import Google Font for Minecraft-like style
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;700&display=swap';
document.head.appendChild(link);

// Minecraft Wiki Database
const wikiDatabase = {
    blocks: [
        {
            name: "Stone",
            description: "Stone is a basic block found throughout the Minecraft world. It's the most common block in caves and underground.",
            info: [
                "Requires a pickaxe to mine",
                "Turns into cobblestone when mined with a pickaxe",
                "Can be smelted to create smooth stone",
                "Found at any Y-level underground"
            ]
        },
        {
            name: "Dirt",
            description: "Dirt is a block that makes up much of the surface terrain. It's easily broken and can support grass.",
            info: [
                "Can be harvested with any tool",
                "Turns into grass block when exposed to light",
                "Used for farming with hydration",
                "Common in all biomes"
            ]
        },
        {
            name: "Diamond Ore",
            description: "Diamond ore is a rare ore found deep underground. It's one of the most valuable blocks in Minecraft.",
            info: [
                "Found only below Y-level 16",
                "Requires iron pickaxe or better to mine",
                "Drops a single diamond when mined",
                "Very rare and valuable"
            ]
        },
        {
            name: "Obsidian",
            description: "Obsidian is a dark, hard block created when water meets lava. It's used for Nether portals.",
            info: [
                "Formed when water flows over lava source blocks",
                "Requires diamond pickaxe to mine",
                "Cannot be broken by explosions",
                "Essential for creating Nether portals"
            ]
        }
    ],
    items: [
        {
            name: "Diamond Pickaxe",
            description: "A pickaxe crafted from diamonds, one of the best tools in the game.",
            info: [
                "Crafted with 3 diamonds and 2 sticks",
                "Mines most blocks faster than other pickaxes",
                "Very durable",
                "Can mine obsidian"
            ]
        },
        {
            name: "Sword",
            description: "Swords are weapons used for combat against mobs and other players.",
            info: [
                "Can be made from wood, stone, iron, diamond, or netherite",
                "Deals increased damage compared to bare hands",
                "Can have enchantments like Sharpness and Knockback",
                "Right-click to shield with proper shield equipped"
            ]
        },
        {
            name: "Bow",
            description: "Bows are ranged weapons that fire arrows.",
            info: [
                "Requires arrows to fire",
                "Can be enchanted with Power, Punch, Flame, and Infinity",
                "Hold right-click to draw the bow",
                "Useful for hunting and combat"
            ]
        },
        {
            name: "Shield",
            description: "Shields are used to block damage from attacks and projectiles.",
            info: [
                "Crafted from wood and iron ingot",
                "Can be held in offhand slot",
                "Blocks incoming damage when raised",
                "Can be enchanted with Unbreaking"
            ]
        }
    ],
    mobs: [
        {
            name: "Zombie",
            description: "Zombies are common hostile mobs that spawn at night or in dark areas.",
            info: [
                "Drop rotten flesh when killed",
                "Burn in sunlight",
                "Move slowly on land",
                "Can break wooden doors on hard difficulty"
            ]
        },
        {
            name: "Creeper",
            description: "Creepers are iconic hostile mobs that explode when near players.",
            info: [
                "Spawn in dark areas at night",
                "Move silently",
                "Explode when within 3 blocks of player",
                "Drop gunpowder when killed"
            ]
        },
        {
            name: "Enderman",
            description: "Endermen are tall, black mobs that can teleport and are found in the End dimension.",
            info: [
                "Teleport when attacked",
                "Neutral unless you look at them",
                "Drop ender pearls when killed",
                "Can pick up and place blocks"
            ]
        },
        {
            name: "Witch",
            description: "Witches are hostile mobs that drink potions and cast spells.",
            info: [
                "Drink healing potions when damaged",
                "Throw splash potions at players",
                "Drop glowstone dust and redstone",
                "Found in swamps and witch huts"
            ]
        }
    ],
    biomes: [
        {
            name: "Plains",
            description: "A flat, grassy biome with minimal trees. Perfect for building.",
            info: [
                "Flat terrain with grass blocks",
                "Few trees",
                "Horses and sheep spawn here",
                "Great for farming and building"
            ]
        },
        {
            name: "Forest",
            description: "A biome covered in trees with dense vegetation.",
            info: [
                "Lots of wood available",
                "Wolves spawn here",
                "Dense foliage provides shade",
                "Good source of saplings and sticks"
            ]
        },
        {
            name: "Desert",
            description: "A hot, sandy biome with temples and villages.",
            info: [
                "Sand blocks everywhere",
                "Temples contain valuable loot",
                "No water or trees",
                "Dangerous during the day without shelter"
            ]
        },
        {
            name: "Mountains",
            description: "A tall, rocky biome with high peaks and caves.",
            info: [
                "Very high elevation",
                "Lots of stone and ore",
                "Goats spawn here",
                "Good for mining materials"
            ]
        }
    ],
    crafting: [
        {
            name: "Crafting Table",
            description: "A 3x3 grid crafting station that allows complex recipes.",
            info: [
                "Crafted from 4 wooden planks",
                "Allows 3x3 crafting grid",
                "Essential for progression",
                "Can be placed anywhere"
            ]
        },
        {
            name: "Furnace",
            description: "A smelting station used to cook food and smelt ores.",
            info: [
                "Crafted from 8 cobblestone blocks",
                "Requires fuel like coal or wood",
                "Smelts ore into ingots",
                "Cooks raw meat into edible food"
            ]
        },
        {
            name: "Chest",
            description: "A storage container with 27 inventory slots.",
            info: [
                "Crafted from 8 wooden planks",
                "Can be placed next to another chest for double size",
                "Opens even when blocks are on top",
                "Items don't despawn inside"
            ]
        },
        {
            name: "Door",
            description: "A door that can be opened and closed to block mobs.",
            info: [
                "Crafted from 6 wooden planks",
                "Blocks mobs from entering",
                "Can be activated with redstone",
                "Zombies can break wooden doors on hard"
            ]
        }
    ],
    enchantments: [
        {
            name: "Sharpness",
            description: "Increases the damage dealt by swords and axes.",
            info: [
                "5 levels available (I-V)",
                "Each level adds 1.25 damage",
                "Most important sword enchantment",
                "Applied to swords and axes"
            ]
        },
        {
            name: "Protection",
            description: "Reduces damage taken by the wearer.",
            info: [
                "4 levels available (I-IV)",
                "Can be applied to any armor piece",
                "Each level reduces damage by 4%",
                "Stacks with other protection enchantments"
            ]
        },
        {
            name: "Unbreaking",
            description: "Increases the durability of tools and weapons.",
            info: [
                "3 levels available (I-III)",
                "Reduces durability loss by 100/(level+1)%",
                "Essential for valuable tools",
                "Can be applied to most items"
            ]
        },
        {
            name: "Mending",
            description: "Uses experience to repair items automatically.",
            info: [
                "Most valuable enchantment",
                "Repairs equipped or held item with XP",
                "Only 1 level",
                "Found only in loot chests"
            ]
        }
    ],
    dimensions: [
        {
            name: "Overworld",
            description: "The main dimension where players spawn and explore.",
            info: [
                "Default spawn location",
                "Contains all biomes and structures",
                "Has day/night cycle",
                "Most accessible dimension"
            ]
        },
        {
            name: "Nether",
            description: "A dangerous, fiery dimension filled with lava and hostile mobs.",
            info: [
                "Accessed through obsidian portals",
                "1 block = 8 blocks in Overworld",
                "Contains unique ores and structures",
                "Very hostile and dangerous"
            ]
        },
        {
            name: "The End",
            description: "A dark dimension where the Ender Dragon resides.",
            info: [
                "Accessed by finding strongholds",
                "Contains End crystals and the dragon",
                "Defeating dragon wins the game",
                "Surrounded by void"
            ]
        }
    ],
    structures: [
        {
            name: "Village",
            description: "Generated structures populated with villagers.",
            info: [
                "Contain useful NPCs for trading",
                "Have various buildings",
                "Found in plains, deserts, and more",
                "Can be defended and expanded"
            ]
        },
        {
            name: "Dungeon",
            description: "Underground structures with monsters and loot chests.",
            info: [
                "Spawn under caves",
                "Contain hostile mobs",
                "Have valuable loot",
                "Good early-game resource"
            ]
        },
        {
            name: "Stronghold",
            description: "Rare structures found underground containing the End portal.",
            info: [
                "Located using Eyes of Ender",
                "Contain valuable loot",
                "Home to the End portal",
                "Very rare and deep underground"
            ]
        },
        {
            name: "Nether Fortress",
            description: "Structures in the Nether with valuable loot and Blazes.",
            info: [
                "Made of nether brick",
                "Spawn Blazes",
                "Contain valuable items",
                "Necessary for progression to the End"
            ]
        }
    ],
    mechanics: [
        {
            name: "Hunger System",
            description: "A system that tracks player hunger and health regeneration.",
            info: [
                "10 hunger points (shown as drumsticks)",
                "Regenerates health when full",
                "Decreases with activity",
                "Restored by eating food"
            ]
        },
        {
            name: "Experience Points",
            description: "Points earned by killing mobs, smelting, and mining.",
            info: [
                "Used for enchanting",
                "Collected by floating orbs",
                "Required to level up",
                "Mended items consume XP"
            ]
        },
        {
            name: "Damage System",
            description: "How damage is calculated from various sources.",
            info: [
                "Armor reduces damage percentage",
                "Enchantments provide additional protection",
                "Different damage sources have different mechanics",
                "Fall damage based on height"
            ]
        },
        {
            name: "Spawn System",
            description: "How mobs spawn and appear in the world.",
            info: [
                "Requires darkness (light level 0-7)",
                "Mob cap limits total mobs",
                "Can be prevented with light sources",
                "Peaceful mode prevents all spawning"
            ]
        }
    ],
    potions: [
        {
            name: "Potion of Healing",
            description: "Instantly restores health to the player.",
            info: [
                "Brewed with Glistering Melon",
                "Restores 4 health (2 hearts)",
                "Level II restores 8 health",
                "Damages undead mobs"
            ]
        },
        {
            name: "Potion of Strength",
            description: "Increases melee damage dealt by the player.",
            info: [
                "Brewed with Blaze Powder",
                "Increases damage by 3 (level I)",
                "Lasts 3 minutes base",
                "Useful for combat"
            ]
        },
        {
            name: "Potion of Invisibility",
            description: "Makes the player invisible to mobs.",
            info: [
                "Brewed from Potion of Night Vision",
                "Mobs cannot see invisible players",
                "Still take damage",
                "Lasts 3 minutes"
            ]
        },
        {
            name: "Potion of Fire Resistance",
            description: "Protects the player from fire and lava damage.",
            info: [
                "Brewed with Magma Cream",
                "Prevents all fire damage",
                "Essential for Nether exploration",
                "Lasts 3 minutes"
            ]
        }
    ],
    tools: [
        {
            name: "Pickaxe",
            description: "A tool used for mining stone and ore blocks.",
            info: [
                "Available in 6 material tiers",
                "Different tiers mine different blocks",
                "Diamond pickaxe mines obsidian",
                "Essential for progression"
            ]
        },
        {
            name: "Axe",
            description: "A tool for chopping wood and dealing damage.",
            info: [
                "Faster than pickaxe for wood",
                "Can be used as weapon",
                "Available in multiple materials",
                "Can disable shields"
            ]
        },
        {
            name: "Shovel",
            description: "A tool for digging dirt, sand, and snow.",
            info: [
                "Fast for soft blocks",
                "Creates pathway when used",
                "Can extinguish campfires",
                "Less useful than other tools"
            ]
        },
        {
            name: "Hoe",
            description: "A tool used for farming and tilling soil.",
            info: [
                "Tills grass and dirt into farmland",
                "Required for planting crops",
                "Can break leaves quickly",
                "Essential for farming"
            ]
        }
    ],
    redstone: [
        {
            name: "Redstone Dust",
            description: "A conductive material that carries power for circuits.",
            info: [
                "Transmits power up to 15 blocks",
                "Can be turned on/off by various sources",
                "Used to create complex machines",
                "Found deep underground"
            ]
        },
        {
            name: "Redstone Repeater",
            description: "A device that repeats and delays redstone signals.",
            info: [
                "Adds 1-4 ticks of delay",
                "Prevents signal decay",
                "Useful for timing circuits",
                "Can be locked by side input"
            ]
        },
        {
            name: "Comparator",
            description: "Compares two redstone signals and outputs the result.",
            info: [
                "Has two modes: compare and subtract",
                "Useful for logic circuits",
                "Can detect container contents",
                "Advanced redstone component"
            ]
        },
        {
            name: "Piston",
            description: "A block that can be pushed or pulled by redstone.",
            info: [
                "Extends and retracts with redstone signal",
                "Sticky piston can pull blocks",
                "Used in many machines",
                "Essential for automation"
            ]
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

    // Create cube/block particles
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'block-particle';
        
        // Random direction
        const angle = (Math.PI * 2 * i) / 12;
        const distance = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        // Random colors - purple/blue theme
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

    // Add pulse ring
    const ring = document.createElement('div');
    ring.className = 'pulse-ring';
    ring.style.left = '-50px';
    ring.style.top = '-50px';
    ring.style.borderColor = '#7c3aed';
    container.appendChild(ring);

    setTimeout(() => container.remove(), 800);
}

// Create Hit Particle Effect (like Minecraft damage particles)
function createHitParticles(x, y) {
    const container = document.createElement('div');
    container.className = 'click-vfx';
    container.style.left = x + 'px';
    container.style.top = y + 'px';
    document.body.appendChild(container);

    // Create small number particles (like damage numbers)
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

// Cursor Glow Effect
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.cursor-glow');
    glow.style.left = (e.clientX - 200) + 'px';
    glow.style.top = (e.clientY - 200) + 'px';
});

// Global click handler for VFX
document.addEventListener('click', (e) => {
    // Create block break effect
    createBlockBreakEffect(e.clientX, e.clientY);
    
    // Randomly create hit particles
    if (Math.random() > 0.5) {
        setTimeout(() => createHitParticles(e.clientX, e.clientY), 100);
    }
});

// Smooth Scroll Navigation
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

// Update active nav link on scroll
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

// Search Functionality
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function searchWiki(query) {
    if (!query.trim()) {
        searchResults.classList.add('hidden');
        return;
    }

    const results = [];
    const lowerQuery = query.toLowerCase();

    // Search through all categories
    Object.keys(wikiDatabase).forEach(category => {
        wikiDatabase[category].forEach(item => {
            if (item.name.toLowerCase().includes(lowerQuery) || 
                item.description.toLowerCase().includes(lowerQuery)) {
                results.push({ ...item, category });
            }
        });
    });

    // Display results
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

    // Add click handlers to results
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

// Display Content
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

// Category Cards Click Handler
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', (e) => {
        createBlockBreakEffect(e.clientX, e.clientY);
        const category = card.getAttribute('data-category');
        displayContent(category);
        
        // Scroll to content
        setTimeout(() => {
            document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    });
});

// CTA Button
document.querySelector('.cta-button')?.addEventListener('click', (e) => {
    createBlockBreakEffect(e.clientX, e.clientY);
    setTimeout(() => {
        document.querySelector('#categories').scrollIntoView({ behavior: 'smooth' });
    }, 100);
});

// Logo Click Effect
document.querySelector('.logo')?.addEventListener('click', (e) => {
    createBlockBreakEffect(e.clientX, e.clientY);
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Display default content
    displayContent('blocks');
    
    // Scroll reveal animations
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