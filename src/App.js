import * as Redux from 'react-redux';
import { useEffect } from 'react';

const App = props => {

   const {dispatch, user: { list: users }} = props;

   useEffect(() => {
      // -> 1 - je dispatch mon action pour récupérer des utilisateurs
      dispatch({'type': 'GET_USERS_REQUEST'});
   }, []);

   /**
    * displayUsers
    * @param void
    * @return jsx
    */
   const displayUsers = () => {
      return users.map(user => {
         const { id, email, first_name } = user;
         return (
            <div key={id} style={{'margin': '12px'}}>
               <div>{first_name}</div>
               <div>{email}</div>
            </div>
         );
      });
   }

   return (
      <div className="App">
         Liste des utilisateurs
         {displayUsers()}
      </div>
  );
}

const mapStateToProps = state => state;
export default Redux.connect(mapStateToProps)(App);
