import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  backButton: {
    paddingHorizontal: 10
  },
  profilePicture: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginHorizontal: 5
  },
  chatName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 10
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  icon: {
    paddingHorizontal: 10
  }
});

export default styles;