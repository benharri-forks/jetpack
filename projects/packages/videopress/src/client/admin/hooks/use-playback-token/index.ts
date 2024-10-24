/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
/**
 * Internal dependencies
 */
import { STORE_ID } from '../../../state/constants';
import { VideopressSelectors, VideoPressVideo } from '../../types';

/**
 * React custom hook to get the the video's playback token.
 *
 * @param {VideoPressVideo} video - The VideoPress video
 * @return {object} Playback token
 */
export default function usePlaybackToken( video: VideoPressVideo ) {
	const videoNeedsPlaybackToken = video.needsPlaybackToken;

	// Data
	const playbackToken = useSelect(
		select => {
			if ( videoNeedsPlaybackToken ) {
				return ( select( STORE_ID ) as VideopressSelectors ).getPlaybackToken( video.guid );
			}
			return null;
		},
		[ video.guid ]
	);

	const isFetchingPlaybackToken = useSelect(
		select => {
			if ( videoNeedsPlaybackToken ) {
				return ( select( STORE_ID ) as VideopressSelectors ).isFetchingPlaybackToken();
			}
			return false;
		},
		[ video.guid ]
	);

	return {
		playbackToken: playbackToken?.token,
		isFetchingPlaybackToken,
	};
}
