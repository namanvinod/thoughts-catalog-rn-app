import {
  FlatList,
  ListRenderItem,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";

export type ListItem = { key: string; value: string };

type DefaultRenderItemProps = {
  item: ListItem;
};

type BasicFlatListProps = {
  data: ListItem[];
  containerStyle?: StyleProp<ViewStyle>;
  renderItem?: ListRenderItem<ListItem>;
};

const defaultRenderItem = (props: DefaultRenderItemProps) => {
  const {
    item: { key, value },
  } = props;
  return (
    <>
      <Text key={key}>{value}</Text>
    </>
  );
};

export const BasicFlatList = (props: BasicFlatListProps) => {
  const { containerStyle, data, renderItem } = props;
  return (
    <View style={containerStyle}>
      <FlatList
        data={data}
        renderItem={renderItem ? renderItem : defaultRenderItem}
      />
    </View>
  );
};
