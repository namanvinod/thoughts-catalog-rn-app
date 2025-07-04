import { urls } from "../api/apiUrl";
import { Header } from "../components/Header";
import { BasicFlatList, ListItem } from "../components/UI/BasicList";
import { ThoughtUIModel } from "../models/UIModels";
import { useThoughtsData } from "./useThoughtsData";

export const Dashboard = () => {
  const thoughts = useThoughtsData(urls.getThoughts());

  return (
    <>
      <Header />
      {thoughts && thoughts.length > 0 && <BasicFlatList data={thoughts} />}
    </>
  );
};
