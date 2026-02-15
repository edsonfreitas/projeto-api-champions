import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();

  let response = null;
  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await PlayerRepository.findPlayerById(id);

  let response = null;
  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;
  if (Object.keys(player).length !== 0) {
    await PlayerRepository.insertPlayer(player);
    response = HttpResponse.created();
  } else {
    response = await HttpResponse.badRequest("Player data is required");
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;

  const isDeleted = await PlayerRepository.deleteOnePlayer(id);

  if (isDeleted) {
    response = await HttpResponse.ok({
      message: `Player with id ${id} deleted successfully`,
    });
  } else {
    response = await HttpResponse.badRequest(`Player with id ${id} not found`);
  }
  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel,
) => {
  const data = await PlayerRepository.findAndModifyPlayer(id, statistics);

  if (!data || Object.keys(data).length === 0) {
    return HttpResponse.notFound("Player not found");
  }

  return HttpResponse.ok(data);
};
