export type BaseProps = {
  dateCreated: Date;
  dateUpdated?: Date;
};

export type ThoughtBaseModel = {
  id: number;
  title: string;
  description: string;
  tags: number[];
} & BaseProps;
