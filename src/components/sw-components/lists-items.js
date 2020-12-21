import React from 'react';
import {withData, withSwapiService, withCildFunction, compose} from "../hoc-helpers";
import ItemList from "../item-list";

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
};

const PersonList = compose(
                      withSwapiService(mapPersonMethodsToProps),
                      withData,
                      withCildFunction(renderName)
                  )(ItemList);

const PlanetList = compose(
                      withSwapiService(mapPlanetMethodsToProps),
                      withData,
                      withCildFunction(renderName)
                  )(ItemList);

const StarshipList = compose(
                        withSwapiService(mapStarshipMethodsToProps),
                        withData,
                        withCildFunction(renderModelAndName)
                    )(ItemList);

export {PersonList, PlanetList, StarshipList};
