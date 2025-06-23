// append <div> to [parent] with [className]
function createChild(parent, className) {
	const result = parent.appendChild(document.createElement('div'));
	result.classList.add(className);
	return result;
}

function camelToSpaces(str) {
	const words = [];
	const letters = str.split('');
	let word = '';
	for (let i = 0; i < letters.length; i++) {
	    if (letters[i] === letters[i].toLowerCase()) {
	        word += letters[i];
	    } else {
	        words.push(word);
	        word = letters[i];
	    }
	}
	words.push(word);
	return words.join(' ');
}

function capitalize(str) {
	words = str.split(' ');
    result = [];
	words.forEach(word => {
		result.push(word[0].toUpperCase() + word.substring(1, word.length))
	})
	return result.join(' ');
}

// (I did not included unique items that can not be obtained via multiplayer game)
// Enhancers:
const data_Enhancers = {
	blueShard: new Enhancer('Blue Soul Shard', 'water', [1,1], 'armor', { health: 5 }, 1, ['Boar', 'Wolf', 'Bear'], ['of the Inoshishi', 'of the Ookami', 'of the Kuma'], 'icons/comp_bluesoulsharp.png'),
	chogokinOre: new Enhancer('Cho-Gokin Ore', 'lightning', [2,2], 'armor',  { armor: 10 }, 8, ['Masterpiece', 'Handa', 'Gennai'], ['of the Meisaku', 'of Handa', 'of Gennai'], 'icons/comp_chogokinore.png'),
	coral: new Enhancer('Coral', 'fire', [2,2], 'weapon', { fire_min_damage: 1, fire_max_damage: 3, water_min_damage: 1, water_max_damage: 3 }, 8, ['Blaze', 'Phoenix', 'Amaterasu'], ['of the Honou', 'of the Houtou', 'of Amaterasu'], 'icons/comp_coral.png'),
	debuMeat: new Enhancer('Debu Blubber', 'earth', [2,2], 'weapon', { durability: 5, strength: 5, pushback: 10, lifesteal: 5 }, 12, ['Confusion', 'Knockout', 'Containment'], ['of Konran', 'of Atemi', 'of Fusegi'], 'icons/comp_debublubber.png'),
	kappaShell: new Enhancer('Elder Kappa Shell', 'water', [2,3], 'armor', { durability: 10,  armor: 10, fireResistance: 5, waterResistance: 10, lightningResistance: -10 }, 16, ['Shark', 'Orca', 'Whale'], ['of the Wani', 'of the Shachi', 'of the Kujira'], 'icons/comp_kappashell.png'),

	oniHorn: new Enhancer('Forest Oni Horn', 'lightning', [2,1], 'weapon', { lightning_min_damage: 2, lightning_max_damage: 5 }, 6, ['Yukimutsu', 'Kuniyoshi', 'Muramase'], ['of the Yukimitsu', 'of the Kuniyoshi', 'of the Muramase'], 'icons/comp_forestonihorn.png'),
	oniIchor: new Enhancer('Forest Oni Ichor', 'earth', [2,2], 'armor', { fireResistance: 5, earthResistance: 5 }, 8, ['Asp', 'Viper', 'Tsuchinoko'], ['of the Habu', 'of the Mamushi', 'of the Tsuchinoko'], 'icons/comp_forestoniichor.png'),
	gakiBones: new Enhancer('Gaki Bones', 'lightning', [1,1], 'armor', { durability: 2, armor: 3 }, 2, ['Lightning', 'Thunderclap'], ['of the Ikazuchi', 'of the Raimei'], 'icons/comp_gakibones.png'),
	ghostArmor: new Enhancer('Ghost Armor Plates', 'lightning', [2,3], 'armor', { durability: 5, armor: 15 }, 12, ['Ultimate', 'Immortal', 'Invincible'], ['of the Saikyo', 'of the Fujimi', 'of the Muteki'], 'icons/comp_ghostarmorplates.png'),
	goldShard: new Enhancer('Gold Soul Shard', 'water', [1,1], 'any', { gold: 15 }, 1, ['Hotei', 'Daikoku', 'Benten'], ['of Hotei', 'of Daikoku', 'of Benten'], 'icons/comp_goldensoulsharp.png'),

	greenShard: new Enhancer('Green Soul Shard', 'earth', [1,1], 'weapon', { earth_min_damage: 1, earth_max_damage: 3 }, 1, ['Volcano', 'Stone Spirit', 'Dokuniniushi'], ['of the Kazan', 'of the Ganseki', 'of Dokuniniushi'], 'icons/comp_greensoulsharp.png'),
	dragonHead: new Enhancer('Guardian Dragon Head', 'fire', [2,2], 'weapon', { fire_min_damage: 2, fire_max_damage: 5, lightning_min_damage: 2, lightning_max_damage: 5 }, 12, ['Inferno', 'Fire Serpent', 'Himiko'], ['of the Saiga', 'of the Enjya', 'of Himiko'], 'icons/comp_guardiandragonhead.png'),
	dragonSkin: new Enhancer('Guardian Dragon Skin', 'lightning', [2,2], 'armor', { reflection: 5, indestructible: 1 }, 20, ['Copper', 'Platinum', 'Gold'], ['of the Dou', 'of the Ghin', 'of the Kin'], 'icons/comp_guardiandargonskin.png'),
	dragonWing: new Enhancer('Guardian Dragon Wing', 'earth', [2,2], 'armor', { fireResistance: 10, waterResistance: -5, lightningResistance: 10 }, 8, ['Sage', 'Buddha', 'Kannon'], ['of the Sennin', 'of Hotoke', 'of Kannon'], 'icons/comp_guardiandragonwing.png'),
	hairpin: new Enhancer('Hairpin', 'water', [1,2], 'weapon', { lifesteal: 5 }, 6, ['Spider', 'Centipede', 'Scorpion'], ['of the Kumo', 'of the Mukade', 'of the Sasori'], 'icons/comp_hairpin.png'),

	jade: new Enhancer('Jade', 'earth', [1,2], 'armor', { reflection: 3 }, 3, ['Yamma', 'Orochi', 'Yammabushi'], ['San', 'of Orochi', 'of Yammabushi'], 'icons/comp_jade.png'),
	kappaBlood: new Enhancer('Kappa Blood', 'fire', [2,2], 'any', { strength: 5, vitality: 5 }, 8, ['Red', 'Otokodate', 'Kachikachi-yamma'], ['of Blood', 'of the Otokodate', 'of Kachikachi-yamma'], 'icons/comp_kappablood.png'),
	kappaClaw: new Enhancer('Kappa Claw', 'water', [1,3], 'weapon', { strength: 5, pushback: 5 }, 8, ['Yasha', 'Shoki', 'Jinmen'], ['of Yasha', 'of Shoki', 'of Jinmen'], 'icons/comp_kappaclaw.png'),
	magmaSphere: new Enhancer('Magma Sphere', 'fire', [1,1], 'weapon', { fire_min_damage: 1, fire_max_damage: 10, earth_min_damage: 1, earth_max_damage: 10 }, 24, ['Fire Storm', 'Inferno', 'Meteor'], ['of the Hannya', 'of the Tsuina', 'of Sarugaku'], 'icons/comp_magmaspere.png'),
	oniBones: new Enhancer('Oni Bones', 'earth', [1,2], 'any', { durability: 5, vitality: 5 }, 6, ['Ta-ke', 'Sakura', 'Matsu'], ['of the Ta-ke', 'of the Sakura', 'of the Matsu'], 'icons/comp_onibones.png'),

	oniClaw: new Enhancer('Oni Claw', 'earth', [2,1], 'weapon', { strength: 5, earth_min_damage: 1, earth_max_damage: 5 }, 6, ['Tiger', 'Dragon', 'Demon'], ['of the Tora', 'of the Ryu', 'of the Oni'], 'icons/comp_oniclaw.png'),
	oniFangs: new Enhancer('Oni Fangs', 'water', [1,2], 'weapon', { lifesteal: 5 }, 6, ['Blood Drinker', 'Revival', 'Regeneration'], ['of the Kyuketsuki', 'of Kaifuku', 'of Kyusei'], 'icons/comp_onifang.png'),
	pearl: new Enhancer('Pearl', 'water', [2,2], 'weapon', { freeze: 8 }, 8, ['Storm', 'Tsunami', 'Susano-o'], ['of the Arashi', 'of the Tsunami', 'of Susano-o'], 'icons/comp_pearl.png'),
	purpleEgg: new Enhancer('Purple Kappa Egg', 'earth', [2,2], 'weapon', { pushback: 15 }, 24, ['Suigetsu', 'Suizan'], ['of Suigetsu', 'of Suizan'], 'icons/comp_purplekappaegg.png'),
	purpleShard: new Enhancer('Purple Soul Shard', 'lightning', [1,1], 'weapon', { weaponary: 5 }, 1, ['Quick Strike', 'Death Strike', 'Unyou'], ['of Hayawaza', 'of Hitsatsuwaza', 'of Unyou'], 'icons/comp_purplesoulsharp.png'),

	redEgg: new Enhancer('Red Kappa Egg', 'water', [2,2], 'weapon', { freeze: 50 }, 24, ['Suigetsu', 'Suizan'], ['of Suigetsu', 'of Suizan'], 'icons/comp_redkappaegg.png'),
	redShard: new Enhancer('Red Soul Shard', 'fire', [1,1], 'armor', { mana: 5 }, 1, ['Eclipse', 'Comet', 'Constellation'], ['of the Gesshoku', 'of the Suisei', 'of the Seiza'], 'icons/comp_redsoulsharp.png'),
	scorpionStinger: new Enhancer('Scorpion Dragon Stinger', 'earth', [1,2], 'weapon', { poison: 1 }, 8, ['Spider', 'Centipede', 'Scorpion'], ['of the Kumo', 'of the Mukade', 'of the Sasori'], 'icons/comp_scorpiondragonstinger.png'),
	spiderweb: new Enhancer('Spider Witch Cobwebs', 'lightning', [1,2], 'armor', { reflection: 5, durability: 3 }, 8, ['Tensai', 'Shikome', 'Tsuchigumo'], ['of the Tensai', 'of the Shikome', 'of Tsuchigumo'], 'icons/comp_spiderwitchcobweb.png'),
	tenguFeathers: new Enhancer('Tengu Feathers', 'lightning', [1,2], 'any', { dexterity: 5 }, 6, ['Dragonfly', 'Falcon', 'Tengu'], ['of the Tombo', 'of the Hayabusa', 'of the Tengu'], 'icons/comp_tengufeathers.png'),

	yamainuBlood: new Enhancer('Yama-inu Blood', 'fire', [2,2], 'any', { ki: 5, manasteal: 5 }, 10, ['Soul Drinker', 'Supernatural', 'Mononoke'], ['of the Kyukonki', 'of the Youki', 'of the Mononoke'], 'icons/comp_yama-inu_blood.png'),
	yamainuPelt: new Enhancer('Yama-inu Pelt', 'water', [2,2], 'armor', { armor: 5, waterResistance: 5, earthResistance: 5 }, 8, ['Snow', 'Blizzard', 'Glacier'], ['of Yuki', 'of the Fubuki', 'of the Hyoga'], 'icons/comp_yamainupelt.png')
}

// Boosters:
const data_Boosters = {
	cinnabarStone: new Booster('Cinnabar Kenjya Stone', [2,2], ['water', 'fire'], 'icons/comp_cinnabar.png'),
	goldStone: new Booster('Gold Kenjya Stone', [2,2], ['water', 'fire', 'earth', 'lightning'], 'icons/comp_gold.png'),
	sapphireStone: new Booster('Sapphire Kenjya Stone', [2,2], ['water', 'lightning'], 'icons/comp_sapphire.png'),
	silverStone: new Booster('Silver Kenjya Stone', [2,2], ['earth', 'water'], 'icons/comp_silver.png'),
	steelStone: new Booster('Steel Kenjya Stone', [2,2], ['earth', 'fire', 'water'], 'icons/comp_steel.png'),
	sulfurousStone: new Booster('Sulfurous Kenjya Stone', [2,2], ['earth', 'fire'], 'icons/comp_sulfurous.png'),

	mercuryGlob: new Booster('Mercury Glob', [1,2], 'lightning', 'icons/comp_mercuryglob.png'),
	quartz: new Booster('Quartz', [1,2], 'water', 'icons/comp_quarz.png'),
	sliverIngot: new Booster('Silver Ingot', [1,2], 'earth', 'icons/comp_silveringot.png'),
	sulfur: new Booster('Sulfur', [2,2], 'fire', 'icons/comp_sulfur.png')
}

document.addEventListener('DOMContentLoaded', () => {
	const createWeaponButton = document.querySelector('.create-weapon');
	const createArmorButton = document.querySelector('.create-armor');
	const slotsAmountInput = document.querySelector('.slots-amount');
	const itemNameInput = document.querySelector('.item-name');
	const enhancementsList = document.querySelector('.enhancements');
	const boostersList = document.querySelector('.boosters');
	const itemList = document.querySelector('.item-list');
	const resultList = document.querySelector('.result-list');
	const resultData = document.querySelector('.result-data');
	const infoWrap = document.querySelector('.info');

	const appendEnhancerInfo = function (item) {
		let infoText = '';
		const effects = item.groupDamageValues ? item.groupDamageValues() : item.effects;
		Object.keys(effects).forEach(key => {
			infoText += `<div class="info-item-text"><b>${capitalize(camelToSpaces(key))}:</b> ${effects[key]}</div>`
		});

		let dropsInfo = '';
		let drops = gg_monsters.findDrops(item.name);
		drops.forEach(drop => {
			dropsInfo += `<div class="drop-item">${drop.name}: <b>${drop.chance}%</b></div>`
		});


		infoWrap.innerHTML = `
			<div class="info-item">
				<div class="info-type">${item.availableTarget}</div>
				<div class="info-item-title">${item.name}<span>(${item.element})</span></div>
				${infoText}
			</div>
			<div class="drops-info">
				${dropsInfo}
			</div>
		`;

	}
	const appendBoosterInfo = function (item) {
		let infoText = '<div class="info-item-text"><b>Boosting elements:</b></div>';
		item.target.forEach(target => {
			infoText += `<div class="info-item-text">&nbsp;&nbsp;&nbsp; - ${target}</div>`
		});

		let dropsInfo = '';
		let drops = gg_monsters.findDrops('Gem');
		drops.forEach(drop => {
			dropsInfo += `<div class="drop-item">${drop.name}: <b>${drop.chance}%</b></div>`
		});


		infoWrap.innerHTML = `
			<div class="info-item">
				<div class="info-type">${item.availableTarget}</div>
				<div class="info-item-title">${item.name}</div>
				${infoText}
			</div>
			<div class="drops-info">
				${dropsInfo}
			</div>
		`;
	}

	const items = [];

	Object.keys(data_Enhancers).forEach(key => {
		const item = createChild(enhancementsList, 'list-item');
		item.classList.add(data_Enhancers[key].element);
		if (data_Enhancers[key].iconPath.length)
			if (data_Enhancers[key].slots[0] === 3 || data_Enhancers[key].slots[1] === 3) {
				item.style.background = `#000 url(${data_Enhancers[key].iconPath}) no-repeat center / ${35 * data_Enhancers[key].slots[0]}px ${35 * data_Enhancers[key].slots[1]}px`;
			} else {
				item.style.background = `#000 url(${data_Enhancers[key].iconPath}) no-repeat center / ${50 * data_Enhancers[key].slots[0]}px ${50 * data_Enhancers[key].slots[1]}px`;
			}

		item.innerText = data_Enhancers[key].name;
		item.addEventListener('click', () => {
			if (item.classList.contains('disabled')) return;
			const activeItem = document.querySelector('.list-item.active');
			if (activeItem)
				activeItem.classList.remove('active')
			item.classList.add('active');

			appendEnhancerInfo(data_Enhancers[key]);
		});

		setTimeout(() => {
			const itemButton = createChild(item, 'list-item-button');
			itemButton.addEventListener('click', () => {
				if (itemButton.parentElement.classList.contains('disabled')) return;
				const targetItem = document.querySelector('.result-list-item.active');
				if (targetItem) {
					targetItem.item.addFiller(data_Enhancers[key]);
					updateData();
				}
			});


			let itemLabel;
			let type = data_Enhancers[key].availableTarget;
			if (type === 'armor') {
				itemLabel = createChild(item, 'item-label-armor');
			} else if (type === 'weapon') {
				itemLabel = createChild(item, 'item-label-weapon');
			} else {
				itemLabel = createChild(item, 'item-label-any');
			}
			itemLabel.innerText = type;
			itemLabel.classList.add('js_item_label');

		}, 0);
		
	});

	Object.keys(data_Boosters).forEach(key => {
		const item = createChild(boostersList, 'list-item');
		if (data_Boosters[key].iconPath.length)
			item.style.background = `#000 url(${data_Boosters[key].iconPath}) no-repeat center /  ${50 * data_Boosters[key].slots[0]}px ${50 * data_Boosters[key].slots[1]}px`;

		item.innerText = data_Boosters[key].name;
		item.addEventListener('click', () => {
			const activeItem = document.querySelector('.list-item.active');
			if (activeItem)
				activeItem.classList.remove('active')
			item.classList.add('active');

			appendBoosterInfo(data_Boosters[key]);
		});

		setTimeout(() => {
			const itemButton = createChild(item, 'list-item-button');
			itemButton.addEventListener('click', () => {
				const targetItem = document.querySelector('.result-list-item.active');
				if (targetItem) {
					targetItem.item.addFiller(data_Boosters[key]);
					updateData();
				}
			});
		}, 0);
	});

	createWeaponButton.addEventListener('click', () => {
		if (slotsAmountInput.value && itemNameInput.value) {
			itemList.style.display = "flex";
			const item = new Enhancement('weapon', slotsAmountInput.value, itemNameInput.value);
			slotsAmountInput.value = '';
			itemNameInput.value = '';
			items.push(item);
			const itemElement = createChild(itemList, 'result-list-item');
			itemElement.addEventListener('click', () => {
				const activeItem = document.querySelector('.result-list-item.active');
				if (activeItem)
					activeItem.classList.remove('active')
				itemElement.classList.add('active');
				disableComponents('armor');
				updateData();
			});
			itemElement.item = item;

			setTimeout(() => {
				itemElement.name = createChild(itemElement, 'result-item-name');
				itemElement.slots = createChild(itemElement, 'item-slots');
				itemLabel = createChild(itemElement, 'item-label-weapon');
				itemLabel.innerText = item.type;
				itemElement.name.innerText = item.name;
				itemElement.slots.innerText = `${item.activeSlots()} / ${item.maxSlots}`;

				itemElement.click();
			}, 0);

		} else {
			console.warn('Inputs for Slots and Name must be filled')
		}
	});

	createArmorButton.addEventListener('click', () => {
		if (slotsAmountInput.value && itemNameInput.value) {
			itemList.style.display = "flex";
			const item = new Enhancement('armor', slotsAmountInput.value, itemNameInput.value);
			slotsAmountInput.value = '';
			itemNameInput.value = '';
			items.push(item);
			const itemElement = createChild(itemList, 'result-list-item');
			itemElement.addEventListener('click', () => {
				const activeItem = document.querySelector('.result-list-item.active');
				if (activeItem)
					activeItem.classList.remove('active')
				itemElement.classList.add('active');
				disableComponents('weapon');
				updateData();
			});
			itemElement.item = item;

			setTimeout(() => {
				itemElement.name = createChild(itemElement, 'result-item-name');
				itemElement.slots = createChild(itemElement, 'item-slots');
				itemLabel = createChild(itemElement, 'item-label-armor');
				itemLabel.innerText = item.type;
				itemElement.name.innerText = item.name;
				itemElement.slots.innerText = `${item.activeSlots()} / ${item.maxSlots}`;

				itemElement.click();
			}, 0);

		} else {
			console.warn('Inputs for Slots and Name must be filled')
		}
	});
});

function disableComponents(type = "armor") {
	const listAll = document.querySelectorAll('.js_item_label');
	const listWeapons = document.querySelectorAll('.item-label-weapon');
	const listArmors = document.querySelectorAll('.item-label-armor');
	if (type === 'armor') {
		listWeapons.forEach(item => item.parentElement.classList.remove('disabled'));
		listArmors.forEach(item => item.parentElement.classList.add('disabled'));
	} else {
		listArmors.forEach(item => item.parentElement.classList.remove('disabled'));
		listWeapons.forEach(item => item.parentElement.classList.add('disabled'));
	}
}

// Creating Monsters:
function initMonsters() {
	const monsters = new MonsterList('Main Group');

	// Bake Yoroi
	let monster = new Monster('Bake Yoroi', 25);
	monster.secondDrops.addDropGroup(new DropGroup('Component', 25, [
		{ item: data_Enhancers.ghostArmor, chance: 1}, 
		{ item: data_Enhancers.purpleShard, chance: 90 }, 
		{ item: data_Enhancers.redShard, chance: 9 }, 
	]), 25);
	monsters.addMonster(monster);

	// Dead Foot Solider
	// Notice that all the other undead soldiers are having the same drops, i guess.
	// Yet I was too lazy to double check all of those items and their drop-rates...
	monster = new Monster('Dead Foot Solider', 10);
	monster.secondDrops.addDropGroup(new DropGroup('Component', 2, [
		{ item: data_Enhancers.blueShard, chance: 5}, 
		{ item: data_Enhancers.purpleShard, chance: 20 }, 
		{ item: data_Enhancers.redShard, chance: 5 }, 
		{ item: data_Enhancers.chogokinOre, chance: 20 }, 
		{ item: data_Enhancers.goldShard, chance: 10 }, 
		{ item: data_Enhancers.coral, chance: 20 }, 
		{ item: data_Enhancers.pearl, chance: 10 }, 
		{ item: data_Enhancers.greenShard, chance: 10 }, 
	]), 2);
	monsters.addMonster(monster);

	// Debu
	monster = new Monster('Debu', 25);
	monster.firstDrops.addDrop(data_Enhancers.debuMeat, 95);
	monster.secondDrops.addDrop('Gem', 10);
	monster.secondDrops.addDrop(data_Enhancers.debuMeat, 80);
	monsters.addMonster(monster);

	// Evil Female Ninja
	monster = new Monster('Evil Female Ninja', 50);
	monster.secondDrops.addDrop('Gem', 5);
	monster.secondDrops.addDropGroup(new DropGroup('Component', 5, [
		{ item: data_Enhancers.goldShard, chance: 70 }, 
		{ item: data_Enhancers.greenShard, chance: 30 }, 
	]), 5);
	monsters.addMonster(monster);

	// Evil Priest
	monster = new Monster('Evil Priest');
	monster.firstDrops.addDropGroup(new DropGroup('Component', 10, [
		{ item: data_Enhancers.redShard, chance: 20 }, 
		{ item: data_Enhancers.blueShard, chance: 20 }, 
		{ item: data_Enhancers.jade, chance: 20 }, 
		{ item: data_Enhancers.greenShard, chance: 40 }, 
	]), 10);
	monsters.addMonster(monster);

	// Evil Priestess
	monster = new Monster('Evil Priestess', 1);
	monster.secondDrops.addDropGroup(new DropGroup('Component', 1, [
		{ item: data_Enhancers.blueShard, chance: 10 }, 
		{ item: data_Enhancers.redShard, chance: 10 }, 
		{ item: data_Enhancers.hairpin, chance: 45 }, 
		{ item: data_Enhancers.jade, chance: 10 }, 
		{ item: data_Enhancers.pearl, chance: 25 }, 
	]), 1);
	monsters.addMonster(monster);

	// Gaki
	monster = new Monster('Gaki', 30);
	monster.secondDrops.addDrop('Gem', 5);
	monster.secondDrops.addDrop(data_Enhancers.gakiBones, 35);
	monsters.addMonster(monster);

	// Guardian Dragon
	monster = new Monster('Guardian Dragon', 100);
	monster.firstDrops.addDrop(data_Enhancers.dragonHead, 100);
	monster.secondDrops.addDrop('Gem', 5);
	monster.secondDrops.addDrop(data_Enhancers.dragonSkin, 25);
	monster.secondDrops.addDrop(data_Enhancers.dragonWing, 25);
	monsters.addMonster(monster);

	// Kappa
	monster = new Monster('Kappa', 25);
	monster.firstDrops.addDrop('Gem', 5);
	monster.secondDrops.addDropGroup(new DropGroup('Component', 60, [
		{ item: data_Enhancers.kappaShell, chance: 30 }, 
		{ item: data_Enhancers.kappaClaw, chance: 30 }, 
		{ item: data_Enhancers.kappaBlood, chance: 30 }, 
		{ item: data_Enhancers.pearl, chance: 10 }, 
	]), 60);
	monsters.addMonster(monster);

	// Small Kappa
	monster = new Monster('Small Kappa', 1);
	monster.secondDrops.addDrop('Gem', 1);
	monster.firstDrops.addDropGroup(new DropGroup('Component', 10, [
		{ item: data_Enhancers.kappaClaw, chance: 45 }, 
		{ item: data_Enhancers.kappaBlood, chance: 45 }, 
		{ item: data_Enhancers.pearl, chance: 10 }, 
	]), 10);
	monsters.addMonster(monster);

	// Greater Oni
	monster = new Monster('Greater Oni', 25);
	monster.firstDrops.addDropGroup(new DropGroup('Component', 15, [
		{ item: data_Enhancers.oniBones, chance: 70 }, 
		{ item: data_Enhancers.oniFangs, chance: 30 }
	]), 15);
	monster.secondDrops.addDrop('Gem', 5);
	monsters.addMonster(monster);

	// Lesser Oni
	monster = new Monster('Lesser Oni', 30);
	monster.secondDrops.addDrop('Gem', 5);
	monster.secondDrops.addDropGroup(new DropGroup('Component', 45, [
		{ item: data_Enhancers.oniIchor, chance: 30 }, 
		{ item: data_Enhancers.oniClaw, chance: 30 }, 
		{ item: data_Enhancers.oniHorn, chance: 40 }, 
	]), 45);
	monsters.addMonster(monster);

	// Scorpion Dragon
	monster = new Monster('Scorpion Dragon', 20);
	monster.firstDrops.addDrop('Gem', 15);
	monster.secondDrops.addDropGroup(new DropGroup('Component', 10, [
		{ item: data_Enhancers.scorpionStinger, chance: 80 }, 
		{ item: data_Enhancers.purpleShard, chance: 20 }, 
	]), 10);
	monsters.addMonster(monster);

	// Spider Witch
	monster = new Monster('Spider Witch', 20);
	monster.secondDrops.addDrop('Gem', 5);
	monster.firstDrops.addDropGroup(new DropGroup('Component', 49, [
		{ item: data_Enhancers.spiderweb, chance: 60 }, 
		{ item: data_Enhancers.redShard, chance: 25 }, 
		{ item: data_Enhancers.coral, chance: 15 }, 
	]), 49);
	monsters.addMonster(monster);

	// Tengu
	monster = new Monster('Tengu', 25);
	monster.firstDrops.addDrop(data_Enhancers.tenguFeathers, 10);
	monster.secondDrops.addDrop('Gem', 5);
	monsters.addMonster(monster);

	// Rouzuko of Wolf Clan
	monster = new Monster('Rouzuko of Wolf Clan', 25);
	monster.firstDrops.addDropGroup(new DropGroup('Component', 10, [
		{ item: data_Enhancers.yamainuPelt, chance: 40 }, 
		{ item: data_Enhancers.yamainuBlood, chance: 40 }, 
		{ item: data_Enhancers.greenShard, chance: 20 }, 
	]), 10);
	monsters.addMonster(monster);

	// Yama-inu
	monster = new Monster('Yama-inu', 1);
	monster.firstDrops.addDropGroup(new DropGroup('Component', 5, [
		{ item: data_Enhancers.yamainuPelt, chance: 25 }, 
		{ item: data_Enhancers.yamainuBlood, chance: 75 }, 
	]), 5);
	monsters.addMonster(monster);

	return monsters;
}

function updateData() {
	document.querySelector('.result-wrap').style.display = "flex";
	const itemElement = document.querySelector('.result-list-item.active');
	if (itemElement) {
		const resultData = document.querySelector('.result-data');

		itemElement.slots.innerText = `${itemElement.item.activeSlots()} / ${itemElement.item.maxSlots}`;

		let dataHtml = `<div class="result-data-title">Expected name: ${itemElement.item.getFullName()}</div>`;
		let calculated = itemElement.item.calculateResult();

		itemElement.item.inventory.draw();

		Object.keys(calculated).forEach(key => {
			dataHtml += `<div class="result-data-item">${capitalize(camelToSpaces(key))}: ${calculated[key]}</div>`
		});

		resultData.innerHTML = dataHtml;
	}
}

const gg_monsters = initMonsters();
