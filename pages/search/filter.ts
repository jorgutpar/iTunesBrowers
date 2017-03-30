import { Pipe } from '@angular/core';

@Pipe({
	name: 'filterByType'
})

export class FilterByTypePipe {

transform(v, args){

	// v is the array of results
	// args is an array of arguments - we passed one: the current value of usesFilter
	let kind= args[0];
	//userFilter is null
	if(!kind){
		return v;
	}
	return v.filter((item) => item.kind === kind);
}


}