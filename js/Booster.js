// Enhancing compontents
function Booster (name, slots, elementsAffected = "", iconPath = "") {
	this.name = name;
	this.slots = slots;
	this.type = 'booster';
	this.availableTarget = "any";
	this.target = [];
	this.iconPath = iconPath;

	if (typeof (elementsAffected) === 'string') {
		this.target.push(elementsAffected)
	} else if ( Array.isArray(elementsAffected) ) {
		this.target = elementsAffected
	}
}