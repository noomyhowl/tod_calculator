// Just a list of monsters with inner method for finding specific drop around the whole list.
function MonsterList (name) {
	this.name = name;
	this.monsters = [];

	this.addMonster = (monster) => {
		this.monsters.push(monster)
	}

	this.addMonsters = (monsters) => {
		monsters.forEach (monster => {
			this.monsters.push(monster)
		})
	}

	this.removeMonster = (monster) => {
		const target = this.monsters.indexOf(monster);
		if (target >= 0) {
			this.monsters.splice(target, 1);
			return true
		}
		return false
	}

	this.findDrops = (dropName) => {
		const result = [];
		this.monsters.forEach(monster => {
			let drops = monster.findDrop(dropName);
			if (drops && drops.length)
				drops.forEach(drop => {
					result.push({
						monster: monster,
						name: monster.name,
						chance: drop.chance
					})
				});
		});

		result.sort((a, b) => {

			if (+a.chance > +b.chance) {
				return -1
			} else if (+a.chance < +b.chance) {
				return 1
			}
			return 0
		});

		return result
	}
}