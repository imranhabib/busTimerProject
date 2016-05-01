import { Controller } from '../entities';
 
export default class PlacesCtrl extends Controller {

	/*
	 * @desc - This function adds a new place to the list of places.
	 */
	AddPlace() {
		console.log('add place');
	}

}
 
PlacesCtrl.$inject = ['$scope'];