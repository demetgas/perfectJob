import { useState } from "react";
import { View, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcom,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
        }}
      >
        <Welcome
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleClick={() => {
            if (searchTerm) {
              router.push(`/search/${searchTerm}`);
            }
          }}
        />
        <Popularjobs />
        <Nearbyjobs />
      </View>
    </ScrollView>
  );
};

export default Home;
