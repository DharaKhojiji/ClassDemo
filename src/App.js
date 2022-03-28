import "./App.css";
import ChildComponentF from "./ClassComponents/ChildComponentF";
import ClassClick from "./ClassComponents/ClassClick";
import Counter from "./ClassComponents/Counter";
import EventBind from "./ClassComponents/EventBind";
import ExaProps from "./ClassComponents/ExaProps";
import FunctionClick from "./ClassComponents/FunctionClick";
import Inline from "./ClassComponents/Inline";
import Message from "./ClassComponents/Message";
import NameList from "./ClassComponents/NameList";
import ParentComponent from "./ClassComponents/ParentComponent";
import Stylesheet from "./ClassComponents/Stylesheet";
import appStyle from "./ClassComponents/appStyle.css";
import styles from "./ClassComponents/appStyle.module.css";
import Forms from './ClassComponents/Forms';
// import Cchooks from "./ClassComponents/Cchooks";
// import ChatRecipientPicker from "./ClassComponents/ChatRecipientPicker";
// import Chooks from "./ClassComponents/Chooks";
// import Classhooks from "./ClassComponents/Classhooks";
// import CustomeHooks from "./ClassComponents/CustomeHooks";

// import Form from "./ClassComponents/Form";
// import Listkeys from "./ClassComponents/Listkeys";
// import Logincontrol from "./ClassComponents/Logincontrol";
// import Signup from "./ClassComponents/Signup";

function App(props) {
  return (
    <>
      <Forms></Forms>
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>success</h1>
      {/* <Logincontrol></Logincontrol> */}
      {/* <Listkeys></Listkeys> */}
      {/* <Form></Form> */}

      {/* <Signup></Signup> */}
      {/* <Chooks></Chooks>
      <FriendStatus></FriendStatus> */}
      {/* <Cchooks></Cchooks> */}
      {/* <Classhooks></Classhooks> */}
      {/* <ChatRecipientPicker></ChatRecipientPicker> */}
      {/* <ExaProps name={"dhara"} heroname={"wonderwomen"} ><p1>this is children props</p1></ExaProps>
      <ExaProps name={"dhara"} heroname={"wonderwomen"} ><p1>this is children props</p1></ExaProps>
      <ExaProps name={"dhara"} heroname={"wonderwomen"} ><p1>this is children props</p1></ExaProps>
      <Message></Message> */}
      {/* <Counter></Counter>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      <NameList></NameList>
      <Stylesheet primary={false}></Stylesheet>
      <Inline></Inline>
    </>
  );
}

export default App;
