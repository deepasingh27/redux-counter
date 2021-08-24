import {useDispatch,useSelector} from "react-redux"
import { incrementCreater ,decrementCreater, loginCreater ,logoutCreater} from "./redux/action";


let App = () => {
  let counter = useSelector(function(state){
    // console.log(state);
    return state.counter;
  });

    let logged = useSelector(function(state){
      return state.logged;
    });

  let dispatch = useDispatch()
  return (
    <>
    <button onClick ={()=>{
      dispatch(loginCreater())
    }}>Login</button>

<button onClick ={()=>{
      dispatch(logoutCreater())
    }}>LogOut</button>

    <br></br>

    {logged ? (
    <>
     <button onClick ={()=>{
        dispatch(incrementCreater(1))
      }}>+1</button>
      <button onClick ={()=>{
        dispatch(incrementCreater(10))
      }}>+10</button>
      <p>{counter}</p>
      <button onClick ={()=>{
        dispatch(decrementCreater())
      }}>-</button>
    </>
    ) : (
      ""
    )}
     
    </>
  );
};

export default App;

