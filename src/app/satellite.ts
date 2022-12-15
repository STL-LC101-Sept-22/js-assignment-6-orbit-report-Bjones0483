export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
    if (this.type.toLowerCase() === 'space debris'){
      return true;
   } else {
     return false;
   }
    zebraStripe(arr): boolean {
      return arr.indexOf(this) % 2 === 0 && this.type.toLowerCase() !== 'space debris';
  }
}

// TODO 3a: fix isSpaceDebris check
