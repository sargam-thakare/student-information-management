const UserData =(state ='',action)=>{

    switch(action.type){
        case 'user_name': return action.payload;
         
     

       default:return state
    }      
};

export default UserData