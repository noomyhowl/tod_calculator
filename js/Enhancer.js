// Main enhancing components
let enhancer_id_counter = 0;
function Enhancer (name, element, slots, availableTarget = "any", effects = {}, magicValue = 1, prefix = [], suffix = [], iconPath = "", unique = false) {
	this.name = name;
	this.element = element;
	this.slots = slots;
	this.availableTarget = availableTarget;
	this.type = 'enhancer';
	this.effects = effects;
	this.iconPath = iconPath;
	this.suffix = suffix;
	this.prefix = prefix;
	this.magicValue = magicValue;
	this.unique = unique;
	this.id = enhancer_id_counter ++;

	this.addEffect = (name, value) => {
		this.effects[name] = value;
	};

	this.groupDamageValues = () => {
		const keys = Object.keys(this.effects);
		const result = {};
		keys.forEach(key => result[key] = this.effects[key]);

		// fire damage:
		if (keys.indexOf('fire_min_damage') >= 0) {
			if (keys.indexOf('fire_max_damage') >= 0) {
				result.fireDamage = `${result['fire_min_damage']}-${result['fire_max_damage']}`;
				delete result['fire_max_damage']
			} else {
				result.fireDamage = result['fire_min_damage'];
			}
			delete result['fire_min_damage']
		}

		// earth damage:
		if (keys.indexOf('earth_min_damage') >= 0) {
			if (keys.indexOf('earth_max_damage') >= 0) {
				result.earthDamage = `${result['earth_min_damage']}-${result['earth_max_damage']}`;
				delete result['earth_max_damage']
			} else {
				result.earthDamage = result['earth_min_damage'];
			}
			delete result['earth_min_damage']
		}

		// water damage:
		if (keys.indexOf('water_min_damage') >= 0) {
			if (keys.indexOf('water_max_damage') >= 0) {
				result.waterDamage = `${result['water_min_damage']}-${result['water_max_damage']}`;
				delete result['water_max_damage']
			} else {
				result.waterDamage = result['water_min_damage'];
			}
			delete result['water_min_damage']
		}
		

		// lightning damage:
		if (keys.indexOf('lightning_min_damage') >= 0) {
			if (keys.indexOf('lightning_max_damage') >= 0) {
				result.lightningDamage = `${result['lightning_min_damage']}-${result['lightning_max_damage']}`;
				delete result['lightning_max_damage']
			} else {
				result.lightningDamage = result['lightning_min_damage'];
			}
			delete result['lightning_min_damage']
		}

		return result;
	}
}