const parse = require('csv-parse/lib/sync');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const fs = require('fs');

const adapter = new FileSync('data/items.json');
const db = low(adapter);

const rawItemData = fs.readFileSync('scripts/propItem.txt', 'utf-8');
const rawItemTextData = fs.readFileSync('scripts/propItem.txt.txt', 'utf-8');

db.defaults({ weapons: [], equipment: [] })
  .write();

const itemText = parse(rawItemTextData, {
  delimiter: '	',
	columns: true,
	skip_empty_lines: false
});

const itemData = parse(rawItemData, {
  delimiter: '	',
	columns: true,
	skip_empty_lines: true
})

let textMap = new Map();
for (let item of itemText ) {
	textMap.set(item.id, item.text);
}

let weapons = [];
let equipment = [];

const serialize = (string, defaultVal) => {
	return 	string.replace(/\=/g, defaultVal);
}

for (let item of itemData) {
	switch (item.dwItemKind1) {
		case 'IK1_WEAPON':
			weapons.push({
				name: textMap.get(item.szName),
				description: textMap.get(item.szComment),
				level: serialize(item.dwLimitLevel1, 0),
				job: serialize(item.dwItemJob, ''),
				npcPrice: item.dwCost,
				minDamage: serialize(item.dwAbilityMin, 0),
				maxDamage: serialize(item.dwAbilityMax, 0),
				icon: item.szIcon
			});
			break;
		case "IK1_ARMOR":
			equipment.push({
				name: textMap.get(item.szName),
				description: textMap.get(item.szComment),
				level: serialize(item.dwLimitLevel1, 0),
				job: serialize(item.dwItemJob, ''),
				npcPrice: item.dwCost,
				minDefense: serialize(item.dwAbilityMin, 0),
				maxDefense: serialize(item.dwAbilityMax, 0),
				icon: item.szIcon
			});
			break;
		default: 
			break;
	}
}

db.set('weapons', weapons).write();
db.set('equipment', equipment).write();