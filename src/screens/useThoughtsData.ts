import { useEffect, useState } from "react";
import { get } from "../api/httpClient";
import { ListItem } from "../components/UI/BasicList";
import { ThoughtResponseModel } from "../models/APIModels";

export const useThoughtsData = (url: string) => {
  const [data, setData] = useState<ListItem[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await get<ThoughtResponseModel[]>(url);
      const transformedData =
        data && data.length > 0 ? transformToListItem(data) : null;
      console.log({ data, transformedData });
      setData(transformedData);
    };

    getData();
  }, []);

  const transformToListItem = (data: ThoughtResponseModel[]): ListItem[] => {
    return data.map((datum) => ({
      key: datum.id.toString(),
      value: datum.title,
    }));
  };

  return data;
};
