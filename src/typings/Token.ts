import { Token_SET } from "@constants/Token";

export type TokenDataType = {};

export type TokenState = {};

export type TokenTypes = typeof Token_SET;

export type TokenActions = SetAction;

export type SetAction = () => {
  type: typeof Token_SET;
};
