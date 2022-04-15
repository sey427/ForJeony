import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { theme } from "./colors";
import { CalendarList, ExpandableCalendar } from "react-native-calendars";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CalendarList
        style={styles.calendar}
        horizontal={true}
        pagingEnabled={true}
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        monthFormat={"yyyy MMM"}
        theme={{
          textMonthFontSize: 32,
          textMonthFontWeight: "500",
        }}
      ></CalendarList>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "300" }}>Work Calendar</Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons
            style={{ marginRight: 18 }}
            name="work"
            size={45}
            color="gray"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            style={{ marginRight: 18 }}
            name="airplanemode-active"
            size={45}
            color="pink"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: theme.bg,
  },
  calendar: {
    marginTop: 20,
  },
});
