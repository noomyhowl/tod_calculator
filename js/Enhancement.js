// Basically, an item that will be enhanced
function Enhancement (type = "weapon", slots = 1, name = "", fillers = []) {
	this.type = type;
	this.name = name;
	this.maxSlots = slots > 32 ? 32 : slots;
	this.inventory = new Inventory(8, 4, this);
	this.inventory.lockCells(32 - slots);

	// add component to an item
	this.addFiller = (filler) => {
		if (filler.availableTarget === "any" || this.type === filler.availableTarget) {
			if (this.inventory.addItem({ width: filler.slots[0], height: filler.slots[1], itemObject: filler })) {
				return true
			} else {
				console.warn('Filler', filler.name, 'can not fit in the enhancement!')
			}
		} else {
			console.warn('Filler', filler.name, 'is not available for this enhancement!');
			return false
		}
		updateData();
	}

	// add components to an item in amount of _count_ (not used)
	this.addFillerMultiple = (filler, count) => {
		for (let i = 0; i < count; i++) {
			if (!this.addFiller(filler))
				break
		}
	}

	// remove component from an item
	this.removeFiller = (itemTarget) => {
		const target = this.inventory.items.find(item => {
			return item.itemObject === itemTarget
		})
		if (target) {
			this.inventory.removeItem(target)
		}

		updateData();
	}

	// calculate multipliers for all the elements in the current enhancement
	this.calculateBoosts = () => {
		const result = {
			fire: 1,
			water: 1,
			earth: 1,
			lightning: 1
		}

		this.inventory.items.forEach(filler => {
			if (filler.itemObject.type === 'booster') {
				filler.itemObject.target.forEach(element => {
					result[element] ++
				});
			}
		});

		return result
	}

	// calculate all the effects in the current enhancement
	this.calculateEffects = () => {
		const result = {
			fire: [],
			water: [],
			earth: [],
			lightning: []
		};

		this.inventory.items.forEach(filler => {
			if (filler.itemObject.type === 'enhancer') {
				Object.keys(filler.itemObject.effects).forEach(effectKey => {
					if (typeof (result[filler.itemObject.element][effectKey]) !== 'undefined') {
						result[filler.itemObject.element][effectKey] += filler.itemObject.effects[effectKey]
					} else {
						result[filler.itemObject.element][effectKey] = filler.itemObject.effects[effectKey]
					}
				})
			}
		});

		return result
	}

	this.valueList = () => {
		const boost = this.calculateBoosts();
		let result = [];
		let order = 0;
		this.inventory.items.forEach(filler => {
			if (filler.itemObject.type === 'enhancer') {
				const target = result.find(item => {
					return item.name === filler.itemObject.name
				});
				if (typeof (target) !== 'undefined') {
					target.count ++;
					target.value = target.count * filler.itemObject.magicValue * boost[filler.itemObject.element];
				} else {
					result.push({
						value: filler.itemObject.magicValue * boost[filler.itemObject.element],
						boost: boost[filler.itemObject.element],
						baseValue: filler.itemObject.magicValue,
						suffix: filler.itemObject.suffix,
						prefix: filler.itemObject.prefix,
						count: 1,
						name: filler.itemObject.name,
						order: order ++
					})
				}
			}
		})



		return result.sort((a, b) => {
			if (a.value > b.value) {
				return -1
			} else if (a.value < b.value) {
				return 1
			} else {
				if (a.order > b.order) {
					return -1
				} else if (a.order < b.order) {
					return 1
				} else {
					return 0
				}
			}
		})
	}

	this.getSuffix = (valueListItem) => {
		if (!valueListItem) return '';
		if (valueListItem.suffix[valueListItem.count - 1]) {
			return valueListItem.suffix[valueListItem.count - 1]
		} else {
			return valueListItem.suffix[valueListItem.suffix.length - 1]
		}
	}
	this.getPrefix = (valueListItem) => {
		if (!valueListItem) return '';
		if (valueListItem.prefix[valueListItem.count - 1]) {
			return valueListItem.prefix[valueListItem.count - 1]
		} else {
			return valueListItem.prefix[valueListItem.prefix.length - 1]
		}
	}

	this.getPrefixOwner = (valueList) => {
		let result = null;
		if (valueList.length > 0)
			result = valueList[0]
		return result
	}
	this.getSuffixOwner = (valueList) => {
		let result = null;
		if (valueList.length > 1)
			result = valueList[1]
		return result
	}

	this.getFullName = () => {
		valueList = this.valueList();
		let prefix = this.getPrefix(this.getPrefixOwner(valueList));
		let suffix = this.getSuffix(this.getSuffixOwner(valueList));
		let result = capitalize(camelToSpaces(this.name));
		if (prefix) {
			result = prefix + ' ' + result;

			if (suffix) {
				result = result + ' ' + suffix
			}
		}

		return result
	}

	// multiply all calculated effects with all elemental multipliers
	this.calculateResult = () => {
		const effects = this.calculateEffects();
		const boosts = this.calculateBoosts();
		const temp_result = {};
		const magicValues = {};

		Object.keys(effects).forEach(element => {
			Object.keys(effects[element]).forEach(effectName => {
				if (typeof (temp_result[effectName]) === 'undefined') {
					temp_result[effectName] = effects[element][effectName] * boosts[element]
				} else {
					temp_result[effectName] += effects[element][effectName] * boosts[element]
				}
			})
		});

		let result = {};
		Object.keys(temp_result).forEach(key => {
			if (typeof (result[key]) === 'undefined') {
				result[key] = temp_result[key]
			} else {
				result[key] += temp_result[key]
			}
		});
		this.groupDamageValues(result);

		return result
	}

	this.groupDamageValues = (result) => {
		const keys = Object.keys(result);

		// fire damge:
		if (keys.indexOf('fire_min_damage') >= 0) {
			if (keys.indexOf('fire_max_damage') >= 0) {
				result.fireDamage = `${result['fire_min_damage']}-${result['fire_max_damage']}`;
				delete result['fire_max_damage']
			} else {
				result.fireDamage = result['fire_min_damage'];
			}
			delete result['fire_min_damage']
		}

		// earth damge:
		if (keys.indexOf('earth_min_damage') >= 0) {
			if (keys.indexOf('earth_max_damage') >= 0) {
				result.earthDamage = `${result['earth_min_damage']}-${result['earth_max_damage']}`;
				delete result['earth_max_damage']
			} else {
				result.earthDamage = result['earth_min_damage'];
			}
			delete result['earth_min_damage']
		}

		// water damge:
		if (keys.indexOf('water_min_damage') >= 0) {
			if (keys.indexOf('water_max_damage') >= 0) {
				result.waterDamage = `${result['water_min_damage']}-${result['water_max_damage']}`;
				delete result['water_max_damage']
			} else {
				result.waterDamage = result['water_min_damage'];
			}
			delete result['water_min_damage']
		}
		

		// lightning damge:
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

	this.activeSlots = () => {
		let result = 0;
		this.inventory.items.forEach(item => { result += item.width * item.height });
		return result
	}
}