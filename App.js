// บทที่ 2
// import React, { Component } from 'react';
// import {
//   Alert, 
//   AppRegistry, 
//   ScrollView,
//   Picker,
//   FlatList,
//   SectionList,
//   StyleSheet, 
//   Button, 
//   Switch,
//   Image,
//   Text, 
//   Slider,
//   TouchableHighlight, 
//   TextInput, 
//   View} from 'react-native';
//   import {WebView} from 'react-native-webview';

  
//     export default class App extends Component {
//       constructor(props) {
//         super(props);
//         this.state = {text: ' '};
//         super();
//         this.state = {
//           email: '',
//           password: ''};
//         this.state = {
//           switch1Value: false,};
//         this.state = {
//           names : [
//             {'name': 'Chemical Engineering', 'id': 1},
//             {'name': 'Civil Engineering', 'id': 2},
//             {'name': 'Computer Engineering', 'id': 3},
//             {'name': 'Electrical Engineering', 'id': 4},
//             {'name': 'Environment Science', 'id': 5},
//             {'name': 'Material Science', 'id': 6},
//             {'name': 'Software Engineering', 'id': 7}
//           ]
//         }
//     }
    
//     toggleSwitch1 = (value) => {
//       this.setState({switch1Value: value})
//     }
//     _onPressButton() {
//       Alert.alert('You tapped the button!')
//     }
//     _onPressButton(email, pass) {
//       alert('email: ' + email + ' password: ' + pass)
//     }
//     _onLongPressButton() {
//       Alert.alert('You long-pressed the button!')
//     }
//     state = {department: ''}
//       updateDepartment = (department) => {
//       this.setState({ department: department })
//     }
//     state = {price: ''}
//       updatePrice = (price) => {
//       this.setState({ price: price*25000 })
//     }
    
//     render() {
//       return (
//         <ScrollView >
//           <View
//             style={{padding: 5}}
//             style ={styles.container}
//             style={{flex: 1,marginTop: 10}}
//             style={styles.container}>
//           <Text style={{fontSize:10}}>Department List</Text>
//           <Text style={{fontSize:10}}>Knowledge List</Text>
//           <TextInput
//             style={{height: 40}}
//             placeholder="Walailak university"
//             onChangeText={(text) => this.setState({text})}/>
//             <Text style={{color: 'red', padding: 5, fontSize: 21}}>
//           {this.state.text}</Text>
//         <Text style={{color: 'blue', padding: 5, fontSize: 21}}>
//           {this.state.text}</Text>
//           <TextInput style = {styles.input}
//             underlineColorAndroid = "transparent"
//             placeholder = "Email"
//             placeholderTextColor = "#9a73ef"
//             autoCapitalize = "none"
//             onChangeText = {(text)=>this.setState({ email: text })}/>            
//           <TextInput style = {styles.input}
//             underlineColorAndroid = "transparent"
//             placeholder = "Password"
//             placeholderTextColor = "#9a73ef"
//             autoCapitalize = "none"
//             onChangeText = {(text)=>this.setState({ password: text })}/>
//             <Text style={{color: '#FF3300', padding: 1, fontSize: 15}}>
//             {this.state.text}</Text>
//           <TouchableHighlight 
//             onPress={()=>this._onPressButton(this.state.email, this.state.password)}
//             onLongPress={this._onLongPressButton}
//             underlayColor="white">
//             <View style={styles.button}>
//               <Text style={styles.buttonText}>Touchable with Long Press</Text>
//             </View>
//           </TouchableHighlight>
//           <Button    
//             onPress={this._onPressButton}
//             title="Alert Message"
//             color='black'/>
//           <Button    
//             onPress={()=>this.setState ({text: 'Software Engineering'})}
//             title="Alert Message2"
//             color = 'green'/> 
//           <Picker selectedValue = {this.state.department} onValueChange = {this.updateDepartment}>
//             <Picker.Item label = "Computer" value = "Computer" />
//             <Picker.Item label = "Electrical" value = "Electrical" />
//             <Picker.Item label = "Civil" value = "Civil" />
//             <Picker.Item label = "Chemical" value = "Chemical" />
//             <Picker.Item label = "Material" value = "Material" />
//             <Picker.Item label = "Environment" value = "Environment" />
//             <Picker.Item label = "Software Engineering" value = "Software Engineering" />
//           </Picker>
//           <Text style = {styles.text}>{this.state.department}</Text>
//           <Text>Tuition fee</Text>
//           <Slider onValueChange = {this.updatePrice} />
//           <Text style = {{fontSize: 10, color: 'red'}}>{this.state.price}</Text>
//           <Text>Switch 1</Text>
//           <Switch onValueChange = {this.toggleSwitch1} value = {this.state.switch1Value}/>
//           <Text style = {{fontSize: 10, color: 'red'}}>Switch 1 is {this.state.switch1Value*1}</Text>
          
//             <Text style={{fontSize:12}}>Scroll me plz</Text>
//               <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 32, height: 32}} />
//               <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 32, height: 32}} />
//               <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 32, height: 32}} />
//               <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 32, height: 32}} />
//             <Text style={{fontSize:12}}>Load more images</Text>
//               <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 32, height: 32}} />
//               <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 32, height: 32}} />
//               <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 32, height: 32}} />
//               <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 32, height: 32}} />
//             <Text style={{fontSize:12}}>Add little bit more images</Text>
//               <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 32, height: 32}} />
//               <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 32, height: 32}} />
//               <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 32, height: 32}} />
//               <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 32, height: 32}} />
//           {this.state.names.map((item, index) => (
//           <Text key = {item.id} style = {styles.item}>{item.name}</Text>))
//           }
        
//         <FlatList
//           data={[
//           {key: 'Embeded System'},
//           {key: 'Software Developping'},
//           {key: 'Networking'},
//           {key: 'Security'},
//           {key: 'Machine Learning'},
//           {key: 'Software Project Management'},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
//         <SectionList
//           sections={[
//           {title: 'Computer', data: ['Software', 'Embeded', 'Network']},
//           {title: 'Electrical', data: [ 'Communication','Control', 'Electronic', 'Power']},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//           keyExtractor={(item, index) => index}/>
//           </View>
//           <View style={styles.container}>
//                 <WebView 
//                     source= {{uri: 'https://www.google.com'}}
//                     style={{height: 400, width: 400}}
                    
//                 />
//             </View>
//             <View style={styles.container}>
//                 <WebView 
//                   source={{html: '<h1>Web View Test</h1><br>Would you like html?'}}
//                     style={{height: 400, width: 400}}
                    
//                 />
//             </View>
//         </ScrollView>

        
//       );
//     }
//   }

//   const styles = StyleSheet.create({
//     container: {
//       paddingTop: 20,
//       alignItems: 'center'
//     },
//     button: {
//       marginBottom: 30,
//       width: 200,
//       alignItems: 'center',
//       backgroundColor: 'green'
//     },
//     input: {
//       margin: 10,
//       height: 40,
//       width: 260,
//       borderColor: '#7a42f4',
//       borderWidth: 5
//     },
//       text: {
//         fontSize: 15,
//         alignSelf: 'center',
//         color: 'red'
//       },
//       item: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 5,
//         margin: 2,
//         borderColor: '#2a4944',
//         borderWidth: 1,
//         backgroundColor: '#d2f7f1',
//         fontSize: 18,
//         height: 44
//     },
//     container: {
//       flex: 1,
//       justifyContent: 'flex-start',
//       alignItems: 'stretch',
//   },
//   loginWebView: {
//       flex: 1,
//       marginTop: 30,
//       marginBottom: 20
//   },
//     container: {
//       flex: 1,
//       paddingTop: 22
//     },sectionHeader: {
//       paddingTop: 2,
//       paddingLeft: 10,
//       paddingRight: 10,
//       paddingBottom: 2,
//       fontSize: 14,
//       fontWeight: 'bold',
//       backgroundColor: 'rgba(247,247,247,1.0)',
//     }
//   }
// );

// บทที่ 3/1
// import React from 'react';
// import { View, Modal, Button,Text, TouchableHighlight, TimePickerAndroid, DatePickerAndroid, ViewPagerAndroid, ToastAndroid} from 'react-native';

// export default class MyApp extends React.Component {
//    constructor() {
//       super();
//       this.state = {
//       modalVisible: true,
//       }
//       this.state = { iyear : 2020, imonth : 3, iday : 9}
//       this.state = { ihour : 10, iminute : 30}
//     }

//    render() {

//       return(<Modal animationType="slide" transparent={ false }
//          visible={this.state.modalVisible}
//          presentationStyle ="formSheet"
//          onRequestClose={()=> {console.log("onRequestClose");}}>
//          <View style={{ marginTop : 100, flex : 1, alignItems : "center" }}>
//             <View style={{ flex : 1, alignItems : "center" }}>
//                   <Text>I am a modal. Ain't I cool??</Text>
//                   <TouchableHighlight style={{ marginTop : 100 }} onPress={() => { this.setState({ modalVisible : false }); }}>
//                      <Text>Tap me to hide modal</Text>
//                   </TouchableHighlight>
//              </View>
//          </View>
//          <View style={{ marginTop : 100, flex : 1, alignItems : "center" }}>
//             <Button title="Open DatePickerAndroid"
//              onPress={ async () => {
//               const { action, year, month, day } = await DatePickerAndroid.open({date : new Date()});
//               if (action === DatePickerAndroid.dateSetAction) 
//               { this.setState({ iyear : year, imonth: month, iday: day }); }
//               if (action === DatePickerAndroid.dismissedAction)                         
//               { console.log("Dismissed"); }
//              }}
//             />
//             <Text>Date {this.state.iday} {this.state.imonth} {this.state.iyear}</Text>
//          </View>

//          <View style={{ marginTop : 100, flex : 1, alignItems : "center" }}>
//             <Button title="Open TimePickerAndroid"
//              onPress={ async () => {
//               const { action, hour, minute } = await TimePickerAndroid.open({ hour : 11, minute : 30, is24Hour : false });
//               if (action === TimePickerAndroid.timeSetAction)                             
//               { this.setState({ ihour : hour, iminute: minute}); }
//               if (action === TimePickerAndroid.dismissedAction)
//               { console.log("Dismissed"); }
//              }}
//             />
//             <Text>Date {this.state.ihour} {this.state.iminute}</Text>
//          </View>
         
//          <ViewPagerAndroid initialPage={ 0 }
//           style={{ flex : 1, width : "100%", height : 100 }}>
//           <View style={{ alignItems : "center", padding : 10 }}>
//             <Text style={{ fontSize : 24 }}>Page{"\n"}Number{"\n"}1</Text>
//           </View>
//           <View style={{ alignItems : 'center', padding : 10 }}>
//             <Text style={{ fontSize : 24 }}>Page{"\n"}Number{"\n"}2</Text>
//           </View>
//         </ViewPagerAndroid>

//         <View style={{ marginTop : 100, flex : 1, alignItems : "center" }}>
//          <Text>ToastAndroid</Text>
//         <Button title="Show Toast Message (Android Only)"
//           onPress={ async () => {
//             ToastAndroid.show("I am a short message", ToastAndroid.SHORT);
//             ToastAndroid.showWithGravity(
//               "I am a message with gravity, centered",
//               ToastAndroid.SHORT, ToastAndroid.CENTER
//             );
//             ToastAndroid.showWithGravityAndOffset(
//               "I am a message with gravity, offset from the bottom",
//               ToastAndroid.LONG, ToastAndroid.TOP,
//               -75, Dimensions.get("window").height / 2
//             );
//           }}
//         />

//         </View>

//       </Modal>
    
//       );
//    }
// }

// บทที่ 3/2
// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation'; 

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

// บทที่ 4
/*Example of Pre-Populated SQLite Database in React Native*/
// import React from 'react';
// import {createStackNavigator,createAppContainer} from 'react-navigation';
// import HomeScreen from './pages/HomeScreen';
// import RegisterUser from './pages/RegisterUser';
// import UpdateUser from './pages/UpdateUser';
// import ViewUser from './pages/ViewUser';
// import ViewAllUser from './pages/ViewAllUser';
// import DeleteUser from './pages/DeleteUser';
 
// const App = createStackNavigator({
//   HomeScreen: {
//     screen: HomeScreen,
//     navigationOptions: {
//       title: 'HomeScreen',
//       headerStyle: { backgroundColor: '#f05555' },
//       headerTintColor: '#ffffff',
//     },
//   },
//   View: {
//     screen: ViewUser,
//     navigationOptions: {
//       title: 'View User',
//       headerStyle: { backgroundColor: '#f05555' },
//       headerTintColor: '#ffffff',
//     },
//   },
//   ViewAll: {
//     screen: ViewAllUser,
//     navigationOptions: {
//       title: 'View All User',
//       headerStyle: { backgroundColor: '#f05555' },
//       headerTintColor: '#ffffff',
//     },
//   },
//   Update: {
//     screen: UpdateUser,
//     navigationOptions: {
//       title: 'Update User',
//       headerStyle: { backgroundColor: '#f05555' },
//       headerTintColor: '#ffffff',
//     },
//   },
//   Register: {
//     screen: RegisterUser,
//     navigationOptions: {
//       title: 'Register User',
//       headerStyle: { backgroundColor: '#f05555' },
//       headerTintColor: '#ffffff',
//     },
//   },
//   Delete: {
//     screen: DeleteUser,
//     navigationOptions: {
//       title: 'Delete User',
//       headerStyle: { backgroundColor: '#f05555' },
//       headerTintColor: '#ffffff',
//     },
//   },
// });
// export default createAppContainer(App);

// กราฟ ชาฟ
// import React from 'react';
// import {View, Text, Dimensions} from 'react-native';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart
// } from 'react-native-chart-kit'
// export default class App extends React.Component {
//     render() {
//       return (
//         <View>
//           <Text>Bezier Line Chart</Text>
//           <ProgressChart
//             data={{
//               labels: ['Swim', 'Bike', 'Run'], // optional
//               data: [0.4, 0.6, 0.8]}}
//                 width={Dimensions.get('window').width}
//                 height={220}
//                 chartConfig={{
//                 backgroundColor: '#FFFFFF',
//                 backgroundGradientFrom: '#FFCCFF',
//                 backgroundGradientTo: '#FF99CC',
//                 decimalPlaces: 2, // optional, defaults to 2dp
//                 color: (opacity = -200) => `rgba(200, 50, 20, ${opacity})`,
//                 style: {
//                 borderRadius: 16}
//                 }}
//           bezier
//           style={{
//             marginVertical: 8,
//             borderRadius: 16
//           }}
//         />
//         </View>
//             );
//           }
//         }
//         const data = {
//           labels: ['Swim', 'Bike', 'Run'], // optional
//           data: [0.4, 0.6, 0.8]
//         }

import React, { Component } from "react";
import { ScrollView } from "react-native";
import SensorView from "./SensorView";

const axis = ["x", "y", "z"];

const availableSensors = {
  accelerometer: axis,
  // gyroscope: axis,
  // magnetometer: axis,
  // barometer: ["pressure"]
};
const viewComponents = Object.entries(availableSensors).map(([name, values]) =>
  SensorView(name, values)
);

export default class App extends Component {
  render() {
    return (
      <ScrollView testID="scroller">
        {viewComponents.map((Comp, index) => <Comp key={index} />)}
      </ScrollView>
    );
  }
}




