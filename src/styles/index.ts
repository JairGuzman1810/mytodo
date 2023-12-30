import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#6f6f6f',
  },
  text: {
    fontSize: 14,
    color: '#6f6f6f',
  },
  whiteText: {
    fontSize: 14,
    color: '#ffff',
  },
  textInput: {
    borderColor: '#6f6f6f',
    borderWidth: 1,
    borderRadius: 16,
    paddingLeft: 15,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  content: {
    marginTop: 20,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#5897df',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 20,
  },
  scrollcontainer: {
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomColor: '#6f6f6f',
    borderBottomWidth: 1,
  },
  textDone: {
    fontSize: 14,
    color: '#6f6f6f',
    textDecorationLine: 'line-through',
  },
  removebutton: {
    backgroundColor: '#f33d3d',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 20,
  },
  leftcontainer: {
    flex: 1,
  },
});

export default styles;
