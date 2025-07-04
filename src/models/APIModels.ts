import { BaseProps, ThoughtBaseModel } from "./BaseModels";

export type TagResponseModel = {
  id: number;
  name: string;
} & BaseProps;

export type ThoughtResponseModel = ThoughtBaseModel & BaseProps;
