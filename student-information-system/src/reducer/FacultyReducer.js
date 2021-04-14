const FacultyReducer =(state =false,action)=>{

    switch(action.type){
        case 'login_faculty':return true;
        case 'logout_faculty':return false;
           

       default:return state
    }      
};

export default FacultyReducer