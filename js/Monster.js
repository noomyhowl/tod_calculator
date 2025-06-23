// class Monster is used to imitate a final drop container with all the possible drops and drop groups.
// Most of the monsters in game are having "first drop" and "second drop".
// Second drop is enabled only in case when the first drop succeeded, which is included in drop-rate calculation.
function Monster (name, secondDropChance = 0) {
	this.name = name;
	this.firstDrops = new DropGroup('First Items', 100);
	this.secondDrops = new DropGroup('Second Items', secondDropChance);
	this.firstDropChance = 100;
	this.secondDropChance = secondDropChance;

	this.setFirstDropChance = (value) => {
		this.firstDropChance = value
	}
	this.setSecondDropChance = (value) => {
		this.secondDropChance = value
	}

	this.findDrop = (name) => {
		let inFirstDrops = this.firstDrops.find(name);
		let inSecondDrops = this.secondDrops.find(name);
		let result = [];

		if (inFirstDrops) {
			//console.log (`Item ${name} was found in first drops:`, inFirstDrops);
			result.push(inFirstDrops)
		}
		if (inSecondDrops) {
			//console.log (`Item ${name} was found in second drops:`, inSecondDrops);
			result.push({
				item: inSecondDrops.item,
				isGroup: inSecondDrops.isGroup,
				chance: +((inSecondDrops.chance / 100) * this.secondDropChance).toFixed(2)
			})
		}

		return result.length ? result : false
	}
}