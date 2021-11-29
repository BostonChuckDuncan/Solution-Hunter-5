import { User } from './User';

export interface Project {
  id: number;
  title: string;
  description: string;
  teamMembers: Array<User>;
  popId: number;
  popuation: Population;
}

export interface Population {
  id: number;
  templateId: number;
  opParmsId: number;
  individualId: number;
  popSize: number;
  popMax: number;
  popMin: number;
}

export interface OperationParms {
  id: number;
  templateName: string;

  gapOccur: number;
  gapPointA: string;
  gapPointB: string;

  mutationOccur: number;
  mutationPointA: string;
  mutationPointB: string;

  virusOccur: number;
  virusPointA: string;
  virusPointB: string;

  parentOccur: number;
  parentPointA: string;
  parentPointB: string;

  parentSimOccur: number;
  parentSimPointA: string;
  parentSimPointB: string;

  parentContribOccur: number;
  parentContribPointA: string;
  parentContribPointB: string;

  childSurviveOccur: number;
  childSurvivePointA: string;
  childSurvivePointB: string;
}

export interface Individual {
  id: number;
  rating: number;
  attributeId: Attribute[];
}

export interface Attribute {
  id: number;
  attributeType: string;
}
