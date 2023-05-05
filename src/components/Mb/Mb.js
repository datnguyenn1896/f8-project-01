import imgVcb from "../../assets/img/Mb.png";
import "./Mb.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import html2canvas from "html2canvas";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
const Mb = (props) => {
  const [hour, setHour] = useState("16:02");
  const [time, setTime] = useState("16:02:57, 28/03/2023");
  const [toName, setToName] = useState("NGUYEN VAN DAT");
  const [toNumberBank, setToNumberBank] = useState("1027312304");

  const [fromName, setFromName] = useState("NGUYEN VAN DAT");
  const [fromNumberBank, setFromNumberBank] = useState("1027312304");
  const [content, setContent] = useState(
    "huynh thanh phong ck coc mua do shop sinh"
  );
  const [code, setCode] = useState("FT 23118739636940");
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState("1,000,000 VND");

  const handleInputChangeToName = (value) => {
    const sanitizedValue = value.replace(/[^\w\s]/gi, "").toUpperCase();
    setToName(sanitizedValue);
  };

  const handleInputChangeFromName = (value) => {
    const sanitizedValue = value.replace(/[^\w\s]/gi, "").toUpperCase();
    setFromName(sanitizedValue);
  };

  const handleCapture = () => {
    html2canvas(document.querySelector("#phone-frame")).then((canvas) => {
      // Lưu ảnh vào file
      const image = canvas.toDataURL();
      setResult(image);
      // console.log(image);
      // const img = document.createElement("img");
      // img.src = image;
      // document.body.appendChild(img);
    });
  };

  return (
    <div className="main">
      <div id="phone-frame">
        <img className="screen" src={imgVcb} alt="VCB"></img>
        <p className="hour">{hour}</p>
        <p className="time">{time}</p>
        <p className="toName">{toName}</p>
        <p className="toNumberBank">{toNumberBank}</p>
        <p className="fromName">{fromName}</p>
        <p className="fromNumberBank">{fromNumberBank}</p>
        <p className="content-chuyen-tien">{content}</p>
        <p className="code">{code}</p>
        <p className="amount">{amount}</p>
      </div>
      <div className="settings">
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            display: "flex",
            flexDirection: "column",
          }}
          autoComplete="off"
        >
          <TextField
            id="outlined-required"
            label="Giờ"
            defaultValue="16:02"
            onChange={(event) => setHour(event.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Thời gian"
            defaultValue="16:02:57, 28/03/2023"
            onChange={(event) => setTime(event.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Tên người thụ hưởng"
            // defaultValue="NGUYEN VAN DAT"
            value={toName}
            onChange={(event) => handleInputChangeToName(event.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Số tài khoản thụ hưởng"
            // defaultValue="NGUYEN VAN DAT"
            value={toNumberBank}
            onChange={(event) => setToNumberBank(event.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Số tiền"
            // defaultValue="NGUYEN VAN DAT"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Tên người chuyển tiền"
            // defaultValue="NGUYEN VAN DAT"
            value={fromName}
            onChange={(event) => handleInputChangeFromName(event.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Số tài khoản chuyển tiền"
            // defaultValue="NGUYEN VAN DAT"
            value={fromNumberBank}
            onChange={(event) => setFromNumberBank(event.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Nội dung chuyển tiền"
            // defaultValue="NGUYEN VAN DAT"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Mã giao dịch"
            // defaultValue="NGUYEN VAN DAT"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Số tiền"
            // defaultValue="NGUYEN VAN DAT"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />

          <Button
            variant="outlined"
            startIcon={<PhotoCamera />}
            onClick={handleCapture}
          >
            Chụp ảnh
          </Button>
        </Box>
      </div>
      <div className="result">
        <img className="img-result" src={result} alt=""></img>
      </div>
    </div>
  );
};

export default Mb;
