export const MOST_POPULAR_VIDEOS_ENDPOINT =
	'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&';

export const SEARCH_SUGGESTIONS_ENDPOINT =
	'https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=';

export const oauth2GoogleEndpoint = `https://accounts.google.com/o/oauth2/v2/auth?
	client_id=${encodeURIComponent(process.env.REACT_APP_GOOGLE_CLIENT_ID)}&
	redirect_uri=${encodeURIComponent(process.env.REACT_APP_REDIRECT_URI)}&
	scope=https://www.googleapis.com/auth/youtube.readonly&
	state=try_sample_request&
	include_granted_scopes=true&
	response_type=token`;
