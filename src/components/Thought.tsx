import { Text } from "react-native";
import { ThoughtUIModel } from "../models/UIModels";

export const Thought = (props: ThoughtUIModel) => {
  const { title, description } = props;

  return (
    <>
      <Text>{title}</Text>
      {description && description.trim().length > 0 && (
        <Text>{description}</Text>
      )}
    </>
  );
};
