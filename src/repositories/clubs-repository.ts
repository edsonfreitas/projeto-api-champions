import { ClubModel } from "../models/club-model";

const database: ClubModel[] = [
  {
    id: 1,
    name: "Paris Saint-Germain",
    country: "France",
    league: "Ligue 1",
  }
]

export const findAllClubs = async (): Promise<ClubModel[]> => {
  return database;
};
