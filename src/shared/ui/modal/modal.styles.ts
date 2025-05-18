import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  containerFrist: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  mainContainer: {
    // flex: 1,
    height: 589,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },
  textCreate: {
    fontSize: 24,
    marginTop: 25,
    color: "#070A1C",
    fontWeight: 500,
  },
  textNameCreate: {
    marginTop: 50,
    marginBottom: 0,
    fontSize: 16,
  }, 
  inputName: {
    // marginBottom: 30,
    borderColor: COLORS.black
  },
  buttonPublish: {
    flexDirection: "row",
    gap: 8,
    width: 130,
    // marginLeft: 20
	height: 52,
	borderRadius: 1234,
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: COLORS.plum,
	color: COLORS.white,
  },
  button: {
    width: 100,
  },
  inputTopic: {

  },
  containerName: {
    // paddingTop: 20
  },
  containerSettings: {
    // flex: 1,
    flexDirection: "column",
    gap: 16
  },
  textTopiceCreate: {
    fontSize: 16,
  },
  inputDescription: {
    height: 400,
  },
  // inputBoxDescription: {
  //   flexDirection: "column",
	// // alignItems: "center",
	// paddingHorizontal: 10,
	// borderRadius: 10,
	// backgroundColor: COLORS.white,
	// borderWidth: 1,
	// borderColor: COLORS.blue20,
  // height: 140
  // },
  inputBoxDescriptionContainer: {

  },
  inputUrl: {

  },
  textUrlCreate: {
    marginTop: 15,
  },
  TextColor: {
    color: COLORS.white,
    // fontSize: 14
  },
  iconButton: {
    borderWidth: 1,
    borderColor: COLORS.plum,
    borderRadius: 50,
    padding: 0,
    marginLeft: 10,
},
closeButton: {
  position: "absolute",
  top: 16,
  right: 16,
  zIndex: 10,
},
footerButtons: {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 10,
  marginTop: 20,
},
inputBoxDescription: {
  borderWidth: 1,
  borderColor: COLORS.blue20,
  borderRadius: 10,
  padding: 10,
  minHeight: 100,
},
})