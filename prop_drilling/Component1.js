import Component2 from "./component2";
function Component1(props){
    
    return(
        <>
        
          <Component2 obj={props.msg}/>
        
        </>
    
    
    );
};
export default Component1;