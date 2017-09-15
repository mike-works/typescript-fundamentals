import { wait } from './utils/promise';
import { fetchPlaceSummaries, fetchPlaceDetails, PlaceDetails, PlaceSummary } from './utils/places';

export async function autocomplete(term: string): Promise<PlaceDetails[]> {
  console.log(`⏳ Beginning search for ${term}`);
  // Begin actual query API call
  let placeResults: PlaceSummary[] = await fetchPlaceSummaries(term);
  console.log(`✅ Completed search for ${term}`);
  let placeIds = placeResults.map(place => place.place_id);
  let places: PlaceDetails[] = await fetchPlaceDetails(placeIds);
  console.log(places);
  // Return the results (eventual value of the task)
  return places;
}
