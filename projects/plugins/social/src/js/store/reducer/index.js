import { combineReducers } from '@wordpress/data';
import siteData from './site-data';
import connectionData from './connection-data';
import jetpackSettings from './jetpack-settings';

const reducer = combineReducers( {
	siteData,
	connectionData,
	jetpackSettings,
} );

export default reducer;
