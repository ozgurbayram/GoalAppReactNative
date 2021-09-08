
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabStackParamList {}
  }
}
export type RootParamList ={
  Home:undefined;
  Settings:SettingsParamList | undefined
}

export type SettingsParamList = {

}
export type TabStackParamList = {
  Tab: NavigatorScreenParams<TabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type TabStackScreenProps<Screen extends keyof TabStackParamList> = NativeStackScreenProps<
  TabStackParamList,
  Screen
>;

export type TabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, Screen>,
  NativeStackScreenProps<TabStackParamList>
>;
