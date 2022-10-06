import "./styles.css";
import BasicSelect from "./component/Dropdown";
import OutlinedButton from "./component/Button";
import ButtonAppBar from "./component/Header";
import MyFormHelperText from "./component/TextField";
import Footer from "./component/Footer";
import Table from "./component/table/Table";
export default function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <div style={{display:"flex"}}>
      <div className="i-left">
      {/* style={{ display: "flex", justify: "center" }} */}
        <BasicSelect Label="TEMS" />
        <BasicSelect Label="DataType 1" />
        <BasicSelect Label="DataType 2" />
        <BasicSelect Label="DataType 3" />
        <div>
        <MyFormHelperText  name="Addrress Reference"/>
        <MyFormHelperText name="Post Code"/>
        <OutlinedButton />
      </div>
      </div>
      <div className="i-right">
      <Table/>
      </div>
      </div>
      
      <Footer />
    </div>
  );
}
