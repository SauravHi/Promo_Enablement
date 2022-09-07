import "./styles.css";
import BasicSelect from "./component/Dropdown";
import OutlinedButton from "./component/Button";
import ButtonAppBar from "./component/Header";
import MyFormHelperText from "./component/TextField";
import Footer from "./component/Footer";
export default function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <div style={{ display: "flex", justify: "center" }}>
        <BasicSelect Label="DataType" />
        <BasicSelect Label="DataType 2" />
        <BasicSelect Label="DataType 3" />
      </div>
      <div style={{ display: "flex", justify: "center"}}>
        <MyFormHelperText />
        <MyFormHelperText />
      </div>
      <OutlinedButton />
      <Footer />
    </div>
  );
}
