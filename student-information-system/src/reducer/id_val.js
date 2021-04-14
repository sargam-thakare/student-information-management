const id_val =(state ='',action)=>{

    switch(action.type){
        
        case 'id_val':return action.payload;
     

       default:return state
    }      
};

export default id_val