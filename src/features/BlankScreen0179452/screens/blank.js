import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Icon name="bomb" />
      <Text style={styles.Text_5}>Neptun Smart</Text>
      <View>
        <View style={styles.View_15}>
          <Button
            title="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
            color="#789a29"
            style={styles.Button_7}
            onPress={() => alert("Pressed!")}
          />
          <Button
            title="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
            color="#789a29"
            style={styles.Button_10}
            onPress={() => alert("Pressed!")}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  Icon_3: {},
  Text_5: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: "flex-start",
    fontSize: 38,
    fontWeight: "bold"
  },
  View_14: {},
  View_15: {
    width: "200%",
    height: "100%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "flex-start"
  },
  Button_7: {
    width: "50%",
    alignSelf: "flex-end",
    borderRadius: 5,
    textDecorationLine: "underline",
    textTransform: "lowercase"
  },
  Button_10: {
    width: "50%",
    alignSelf: "flex-end",
    borderRadius: 5,
    textDecorationLine: "underline",
    textTransform: "lowercase"
  }
})
