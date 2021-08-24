export const counterReducer = (state = 0 , action) =>{ //reducer takes initial state and takes an aaction
    switch(action.type) {
        case "increment": return state + action.payload;

        case "decrement": return state - 1;
         
        default : return state; 
    }
};

export const loginReducer = (state="false" , action)=>{
    switch(action.type){
        case "Login" : return true;
        
        case "LogOut" : return false;

        default : return state;
    }
}
