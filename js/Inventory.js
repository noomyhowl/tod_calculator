// A visualisation of crafting window with item slots and methods to contain components into that window.
function Inventory (width, height, parent) {
	this.width = width;
	this.height = height;
	this.cells = [];
	this.items = [];
	this.parent = parent;
	this.lockedCellsAmount = 0;
	for (let i = 0; i < width; i++) {
		for (let j = 0; j < height; j++) {
			this.cells.push({ x: i, y: j, order: `${i}${j}`, filled: false, containedItem: null, locked: false });
		}
	}

	this.lockCells = (amount, skipDrawing = false) => {
		this.cells.forEach(cell => cell.locked = false);
		if (amount > 0) {
			this.lockedCellsAmount = amount;
			const length = this.cells.length;
			let counter = amount;

			for (let i = 0; i < length; i++) {
				if (counter > 0) {
					let targetCell = this.cells[length - 1 - i]
					if (!targetCell.filled) {
						targetCell.locked = true;
						counter --;
					}
				}
			}

			if (!skipDrawing)
				this.draw();
		}
	}

	// try adding an item to the inventory. Returns false if an item doesn't fit.
	this.addItem = (item) => {
		// 1. add item to array
		this.items.push(item);

		// 2a. sort array
		this.items.sort((itemA, itemB) => {
			if (itemA.width > itemB.width) {
				return -1
			} else if (itemA.width < itemB.width) {
				return 1
			} else {
				if (itemA.height > itemB.height) {
					return -1
				} else if (itemA.height < itemB.height) {
					return 1
				} else {
					return 0
				}
			}
		});


		// 2b. prepare cells
		this.cells.forEach(cell => {
			cell.filled = false;
			cell.containedItem = null
		})

		// 3. check if everything fits
		let fits = true;
		this.items.forEach(item => {
			if (!this.fitItem(item, false))
				fits = false
		});

		// 4a. if true - draw
		if (fits) {
			this.draw();
			return true;
		} else {
			// 4b. if false - remove item from array
			this.items.splice(this.items.indexOf(item), 1);
			this.refresh();
			return false;
		}
	}

	this.refresh = () => {
		// 1a. sort array
		this.items.sort((itemA, itemB) => {
			if (itemA.width > itemB.width) {
				return -1
			} else if (itemA.width < itemB.width) {
				return 1
			} else {
				if (itemA.height > itemB.height) {
					return -1
				} else if (itemA.height < itemB.height) {
					return 1
				} else {
					return 0
				}
			}
		});


		// 1b. prepare cells
		this.cells.forEach(cell => {
			cell.filled = false;
			cell.containedItem = null
		})

		// 3. check if everything fits
		let fits = true;
		this.items.forEach(item => {
			if (!this.fitItem(item, false))
				fits = false
		});
		if (fits)
			this.draw()
	}

	// fills item into first possible cells
	this.fitItem = (item) => {
		const fitCoords = this.fits(item);
		if (fitCoords) {
			this.fill(fitCoords.x, fitCoords.y, item);
			return true;
		} else {
			//console.warn('Item', item, 'won\'t fit in the inventory!');
			return false;
		}
	}

	this.removeItem = (targetItem) => {
		const target = this.items.find(item => {
			return item === targetItem
		});

		if (target) {
			this.cells.forEach(cell => {
				if (cell.containedItem === targetItem) {
					cell.containedItem = null
				}
			})
			this.items.splice(this.items.indexOf(target), 1);
			this.refresh();
		}
		updateData();
	}

	// redraws whole inventory with all items contained
	this.draw = () => {
		let container = document.querySelector('.inventory');
		container.innerHTML = '';
		container.style.width = `${this.width * gg_cellWidth + gg_cellGap}px`;
		container.style.height = `${this.height * gg_cellHeight + gg_cellGap}px`;
		for (let i = 0; i < this.cells.length; i++) {
			this.cells[i].el = createChild(container, 'inventory-cell');
			this.cells[i].el.style.order = this.cells[i].order;
			// this.cells[i].el.innerText = `${this.cells[i].x}:${this.cells[i].y}`
			if (this.cells[i].locked)
				this.cells[i].el.classList.add('locked')
		}
		this.items.forEach(item => {
			item.el = createChild(container, 'inventory-item');
			item.el.style.left = `${item.x * gg_cellWidth}px`;
			item.el.style.top = `${item.y * gg_cellHeight}px`;
			item.el.style.width = `${item.width * gg_cellWidth}px`;
			item.el.style.height = `${item.height * gg_cellHeight}px`;
			item.el.style.background = `#000 url(${item.itemObject.iconPath}) no-repeat center / contain`;
			item.el.innerText = item.itemObject.name;
			item.deleteButton = createChild(item.el, 'close-button');
			item.deleteButton.addEventListener('click', () => {
				this.removeItem(item);
			});
			item.deleteButton.target = item
		});
		this.lockCells(this.lockedCellsAmount, true);
	}

	// checks if an item can fill somewhere in the inventory
	this.fits = (item) => {
		for (let x = 0; x <= this.width - item.width; x++) {
			for (let y = 0; y <= this.height - item.height; y++) {
				if (this.isEmpty(x, y, item.width, item.height))
					return { x: x, y: y };
			}
		}
		return false;
	}

	// checks if there is any empty rect from [x,y] with sizes of [width,height]
	this.isEmpty = (x, y, width, height) => {
		for (let i = x; i < x + width; i++) {
			for (let j = y; j < y + height; j++) {
				if (!this.isCellEmpty(i, j))
					return false;
			}
		}
		return true;
	}

	// checks if [x,y] cell is empty
	this.isCellEmpty = (x, y) => {
		const targetCell = this.cells.find(cell => {
			return cell.x === x && cell.y === y;
		});
		const locked = this.cellsFilled() > this.cellsEnabled();
		if (targetCell)
			return !targetCell.filled && !locked;
		return true;
	}

	this.cellsEnabled = () => {
		return this.cells.length - this.lockedCellsAmount
	}

	this.cellsFilled = () => {
		let result = 0;
		this.items.forEach(item => { result += item.height * item.width })
		return result;
	}

	// fills the rect from [x,y] with an item
	this.fill = (x, y, item) => {
		for (let i = x; i < x + item.width; i++) {
			for (let j = y; j < y + item.height; j++) {
				const targetCell = this.cells.find(cell => {
					return cell.x === i && cell.y === j;
				});
				if (targetCell) {
					targetCell.filled = true;
					targetCell.containedItem = item;
					item.x = x;
					item.y = y;
				}
			}
		}
	}
}