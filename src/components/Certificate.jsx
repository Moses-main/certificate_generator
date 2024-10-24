import React, { useRef } from "react";
import { Button, Container, Typography } from "@mui/material";
// import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../App.css";

const Certificate = ({ name, certId, date }) => {
  const componentRef = useRef();

  // Function to handle printing or saving as PDF

      const handleDownloadPdf = async () => {
        const input = componentRef.current;

        // Capture certificate as an image with high resolution using html2canvas
        const canvas = await html2canvas(input, {
          scale: 4, // Increase scale to improve resolution and clarity
          useCORS: true,
        });

        const imgData = canvas.toDataURL('image/png');

        // Initialize jsPDF for landscape A4 size
        const pdf = new jsPDF('landscape', 'px', 'a4'); // Landscape orientation
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        // Scale the image to fit within the PDF's dimensions while maintaining aspect ratio
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * pdfWidth) / canvas.width; // Maintain aspect ratio

        // If the image height is larger than the page height, fit to page height instead
        if (imgHeight > pdfHeight) {
          const scaledWidth = (pdfHeight * canvas.width) / canvas.height;
          pdf.addImage(imgData, 'PNG', (pdfWidth - scaledWidth) / 2, 0, scaledWidth, pdfHeight);
        } else {
          pdf.addImage(imgData, 'PNG', 0, (pdfHeight - imgHeight) / 2, imgWidth, imgHeight);
        }

        // Download the generated PDF
        pdf.save('certificate.pdf');
      };






  return (
    <Container maxWidth="1200px" style={{ margin: "20px 30px 0px 10px" }}>
      <Container
        className="cert-background"
        ref={componentRef}
        style={{
          border: "2px solid orangered",
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          height: "auto",
          margin: "auto",
          padding: "40px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          aspectRatio: "297 / 210",
          textAlign: "left",
          boxSizing: 'border-box',

          // backgroundImage: `url('/path/to/your/background-image.jpg')`,
          // width: '100%',
          // maxWidth: '1200px', // Adjust for landscape A4 size
          // height: 'auto',
          // aspectRatio: '297 / 210', // Landscape aspect ratio
          // margin: 'auto',
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // padding: '20px',
          // border: '2px solid black',

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
          style={{ fontWeight: "bold", marginTop: "50px", fontSize: "1.4rem" }}
        >
          CERTIFICATE
        </Typography>
        <Typography
          variant="h4"
          style={{ fontSize: "0.9rem", color: "red", fontWeight: "bold" }}
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
          ______________________________________
        </Typography>

        <Typography
          variant="body2"
          style={{
            textAlign: "justify",
            // fontWeight: "bolder",
            fontSize: "14px",
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
            <div>
              <img
                src="../../sign.png"
                alt="founder signature"
                style={{
                  marginBottom: "-9px",
                  height: "35px",
                  marginRight: "20px",
                  fontWeight: "bold",
                }}
              />
              <br />
              <Typography
                variant="paragraph"
                style={{ fontSize: "11px", fontWeight: "bold" }}
              >
                Nilanjan Raychaudhuri
              </Typography>
              <Typography
                variant="h6"
                style={{ fontSize: "10px", fontWeight: "bold" }}
              >
                Founder - Tublian
              </Typography>
            </div>
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{
              textAlign: "right",
              margin: "50px  5px 0px 0px",
              fontWeight: "bold",
              fontSize: "10px",
            }}
          >
            <Container style={{ marginLeft: "50px" }}>
              <Typography
                style={{
                  color: "red",
                  fontWeight: "bold",
                  paddingBottom: "0px",

                  // fontFamily: "cursive",
                  fontSize: "0.9rem",
                  marginRight: "10px",
                  marginLeft:"2px"
                }}
              >
                <span>
                  <img
                    src="../../batch.png"
                    alt="badge"
                    style={{
                      height: "40px",
                      padding: "0px 2px",
                      margin: "10px 10px -35px 0px",
                    }}
                  />
                </span>
                CERTIFIED
              </Typography>
              Certificate ID: {certId}
              <Typography
                variant="body2"
                gutterBottom
                style={{
                  fontWeight: "bold",
                  fontSize: "10px",
                  marginLeft:"3px"
                }}
              >
                Date Issued: {date}
              </Typography>
            </Container>
          </Typography>
        </Container>
      </Container>

      <Button
        variant="contained"
        color="primary"
        onClick={handleDownloadPdf} sx={{ marginTop: '20px' }}
        style={{ marginTop: "20px" }}
      >
        Download as PDF
      </Button>
    </Container>
  );
};

export default Certificate;
