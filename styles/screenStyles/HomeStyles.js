import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    position: "absolute",
    top: 20,
    alignItems: "center",
    width: "100%",
  },
  selectButtonEnabled: {
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  selectButtonDisabled: {
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  selectButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,

    backgroundColor: "rgba(0,0,0,0.5)",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "#ccc",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  progressBarContainer: {
    marginTop: 20,
  },
  progressBar: {
    width: 100,
    height: 100,
    backgroundColor: "#ccc",
    borderRadius: 50,
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 90, // To leave space at the top and bottom
    marginHorizontal: 20, // To leave space on the sides
    borderRadius: 10, // Optional, to round the corners of the modal
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
  },
  timeOptionsContainer: {
    marginBottom: 20,
  },
  timeOptionButton: {
    padding: 10,
    borderBottomWidth: 1, // Optional, to separate the options
    borderBottomColor: "#ccc", // Optional, color for the separator
  },
  timeOptionText: {
    fontSize: 24,
  },
  regularText: {
    fontSize: 20,
  },
});
