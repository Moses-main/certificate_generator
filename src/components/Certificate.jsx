import React, { useRef } from "react";
import { Button, Container, Typography } from "@mui/material";
import { useReactToPrint } from "react-to-print";
// import { CardMembership } from "@mui/icons-material";
import "../App.css";

const Certificate = ({ name, certId, date }) => {
  const componentRef = useRef();

  // Handler to trigger printing as PDF

  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <Container maxWidth="sm" style={{ margin: "20px 30px 0px -100px" }}>
      <Container
        className="cert-background"
        ref={componentRef}
        style={{
          border: "3px solid orangered",
          position: "relative",
          width: "650px",
          height: "auto",
          margin: "auto",
          padding: "20px",
          backgroundSize: "cover",
          backgroundPosition: "center",

          borderRadius: "12px",
          // marginTop: "20px",
          textAlign: "left",
        }}
      >
        <Typography
          style={{
            color: "orangered",
            fontWeight: "bold",
            fontSize: "15px",
            margin: "10px 0px -5px -20px",
          }}
        >
          <img
            src="../../tublian_s.png"
            alt="logo"
            style={{
              position: "relative",
              height: "40px",
              width: "auto",
              top: "0px",
              margin: "0px 10px -25px 20px",
            }}
          />
          TUBLIAN
        </Typography>

        <Typography
          variant="h4"
          style={{ fontWeight: "bold", marginTop: "50px" }}
        >
          CERTIFICATE
        </Typography>
        <Typography
          variant="h4"
          style={{ fontSize: "1.4rem", color: "red", fontWeight: "bold" }}
        >
          OF INTERNSHIP
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginBottom: "-20px",
            marginTop: "50px",
            textAlign: "center",
            fontFamily: "cursive",
            fontSize: "2em",
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="h6"
          style={{ textAlign: "center", color: "orangered" }}
        >
          ______________________________________________________
        </Typography>

        <Typography
          variant="body2"
          style={{
            textAlign: "justify",
            fontWeight: "bolder",
          }}
        >
          successfully completed the 4-Week AI Internship Program at Tublian,
          demostrating exceptional dedication and commendable work ethic
          throughout the internship. The contributions made including the
          development of an advanced chatbot, have added significant value to
          the AI community.
        </Typography>
        <Container>
          <Typography
            style={{
              marginBottom: "-120px",
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            <img src="" alt="founder signature" />
            <br />
            <Typography
              variant="paragraph"
              style={{ fontSize: "13px", fontWeight: "bold" }}
            >
              Nilanjan Raychaudhuri
            </Typography>
            <Typography
              variant="h6"
              style={{ fontSize: "12px", fontWeight: "bold" }}
            >
              Founder - Tublian
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{
              textAlign: "right",
              margin: "50px  5px 0px 0px",
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            <Typography
              style={{
                color: "red",
                fontWeight: "bold",
                fontFamily: "cursive",
                fontSize: "1rem",
              }}
            >
              CERTIFIED
            </Typography>
            {/* <CardMembership
              style={{
                // fontSize: "80",
                color: "orangered",
                // marginRight: "10px",
              }}
            /> */}
            Certificate ID: {certId}
            <Typography
              variant="body2"
              gutterBottom
              style={{
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              Date Issued: {date}
            </Typography>
          </Typography>
        </Container>
      </Container>

      <Button
        variant="contained"
        color="primary"
        onClick={handlePrint}
        style={{ marginTop: "20px" }}
      >
        Download as PDF
      </Button>
    </Container>
  );
};

export default Certificate;
