// In-game drops are grouped as a tree, so it might be something like:
// Drop: [DropA: [...], DropB: [DropB-Items: [...], DropB-Components: [...]]]]
// DropGroup class enables to create a group which will contain drop items or another drop group, and so on.
// All the drop groups are initiated in initMonsters method (there are components only included).

function DropGroup (name, chance = 0, content = []) {
	this.name = name;
	this.chance = chance;
	this.content = content;

	this.addDrop = (item, chance) => {
		this.content.push({
			item: item,
			chance: chance,
			isGroup: false
		})
	}

	this.addDrops = (items) => {
		items.forEach(item => {
			this.content.push({
				item: item.item,
				chance: item.chance,
				isGroup: false
			})
		});
	}

	this.addDropGroup = (group, chance) => {
		this.content.push({
			group: group.content,
			chance: chance,
			isGroup: true
		})
	}


	this.removeDrop = (drop) => {
		const targetIndex = this.content.indexOf(drop);
		if (targetIndex >= 0) {
			if (!this.removeDropByIndex(index))
				console.warn('Can not find such drop in a drop-list!')
		}
	}

	this.removeDropByIndex = (index) => {
		const target = this.content[index];
		if (target) {
			this.content.splice(index, 1);
			return true
		}
		return false
	}

	this.find = (name) => {
		let result = false;
		this.content.forEach(contentItem => {
			if (result) return;
			if (contentItem.isGroup) {
				let localResult = contentItem.group.find(item => {
					return item.item.name === name
				});
				if (localResult) {
					result = localResult;
				}

			} else {
				if (contentItem.item === name) {
					result = contentItem
				} else if (contentItem.item.name === name) {
					result = contentItem
				}
			}
		});

		return result
	}
}