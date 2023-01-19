import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'blue'
  },
  badgeContainer: {
    backgroundColor: '#3777f0',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    position: 'absolute',
    left: 50,
    top: 10
  },
  badgeText: {
    color: 'white',
    fontSize: 12
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 10
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'gray'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white'
  },
})

export default styles;