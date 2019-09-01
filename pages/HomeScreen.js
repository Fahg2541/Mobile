/*Home Screen With buttons to navigate to different options*/
import React from 'react';
import { View } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'user_db', createFromLocation : 1});
 
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='tbl_user'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS tbl_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS tbl_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name Text, user_contact Text, user_address Text',
              []
            );
          }
        }
      );
    });
  }
 
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
        <Mytext text="SQLite Example" />
        <Mybutton
          title="Register"
          customClick={() => this.props.navigation.navigate('Register')}
        />
        <Mybutton
          title="Update"
          customClick={() => this.props.navigation.navigate('Update')}
        />
        <Mybutton
          title="View"
          customClick={() => this.props.navigation.navigate('View')}
        />
        <Mybutton
          title="View All"
          customClick={() => this.props.navigation.navigate('ViewAll')}
        />
        <Mybutton
          title="Delete"
          customClick={() => this.props.navigation.navigate('Delete')}
        />
      </View>
    );
  }
}