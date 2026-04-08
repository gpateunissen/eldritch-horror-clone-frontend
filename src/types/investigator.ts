export interface Investigator {
  id: number;
  name: string;
  traits: number[];
  max_health: number;
  max_sanity: number;
  starting_location_id: number;
  death_event_id: number;
  insanity_event_id: number;
  starting_item_ids: number[];
  stats: {
    knowledge: number;
    influence: number;
    observation: number;
    strength: number;
    willpower: number;
  };
  fluff: {
    profession: string;
    backstory: string;
    catchphrase: string;
  };
}
