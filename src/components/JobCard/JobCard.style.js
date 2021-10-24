import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    margin: 7,
    backgroundColor: 'white',
    padding: 7,
    borderRadius: 7,
    flexDirection: "column"
  },
  job_name: {
    fontWeight: 'bold',
    fontSize: 15,
    color: "#000"
  },
  company_name: {
    color: "#000"
  },
  location: {
    color: "#fff",
    backgroundColor: "#EF5350",
    borderRadius: 10,
    fontSize: 13,
    padding: 1,
    paddingHorizontal: 7,
    alignSelf: "flex-start"
  },
  level: {
    alignSelf: "flex-end",
    color: "#EF5350",
    fontWeight: "bold",
    fontSize: 13
  },
});
