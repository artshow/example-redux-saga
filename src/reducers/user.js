const initialState = {
   'list': []
}

const user = (state = initialState, action) => {
   switch (action.type) {
      case 'SET_USERS':
         return {
            ...state,
            list: [
               ...action.users
            ]
         };
      default:
         return state;
   }
};

export default user;
