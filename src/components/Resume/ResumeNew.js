import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/../Assets/Senthalan.pdf";
import Particle from "../Particle";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
                          {/* Floating WhatsApp Button */}
                          <a
              href="https://api.whatsapp.com/send/?phone=%2B94701111055&text=Hello+Senth%2C+I+found+your+contact+on+your+website+and+I+would+like+to+talk+to+you+about+your+services."
              target="_blank"
              rel="noreferrer"
              className="whatsapp-float"
              title="Chat with us on WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.994 7.994 0 0 0 8.001 0C3.582 0 0 3.582 0 8c0 1.409.369 2.722 1.006 3.875L0 16l4.219-1.104A7.964 7.964 0 0 0 8.001 16c4.418 0 8-3.582 8-8a7.96 7.96 0 0 0-2.399-5.674zM8.001 14.5a6.455 6.455 0 0 1-3.396-.946l-.243-.144-2.502.654.668-2.438-.158-.25a6.469 6.469 0 0 1-.999-3.376c0-3.584 2.916-6.5 6.5-6.5 1.737 0 3.367.675 4.598 1.902A6.465 6.465 0 0 1 14.501 8c0 3.584-2.916 6.5-6.5 6.5z" />
                <path d="M11.603 9.61c-.173-.087-1.02-.502-1.178-.558-.157-.058-.272-.087-.387.087-.115.173-.445.558-.546.673-.101.115-.202.13-.375.043-.173-.087-.729-.268-1.39-.856-.514-.46-.86-1.03-.961-1.203-.101-.173-.011-.267.076-.354.078-.077.173-.202.26-.303.087-.101.115-.173.173-.288.058-.115.029-.216-.014-.303-.043-.087-.387-.93-.531-1.272-.14-.336-.281-.29-.387-.295-.101-.006-.216-.007-.331-.007-.115 0-.303.043-.46.216-.157.173-.616.601-.616 1.463s.63 1.698.717 1.812c.087.115 1.24 1.896 3.005 2.657.42.181.748.29 1.003.371.421.134.804.115 1.106.07.337-.05 1.02-.417 1.164-.82.144-.403.144-.748.101-.82-.043-.072-.158-.115-.331-.202z" />
              </svg>
            </a>
      
      {/* WhatsApp Floating Button Styles */}
      <style>
        {`
          .whatsapp-float {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 60px;
            height: 60px;
            background-color: #25D366;
            border-radius: 50%;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
            transition: all 0.3s ease;
            cursor: pointer;
          }
      
          .whatsapp-float:hover {
            background-color: #1ebe5d;
            transform: scale(1.05);
          }
      
          .whatsapp-float img {
            width: 28px;
            height: 28px;
          }
      
          @media screen and (max-width: 768px) {
            .whatsapp-float {
              width: 52px;
              height: 52px;
              bottom: 18px;
              right: 18px;
            }
      
            .whatsapp-float img {
              width: 24px;
              height: 24px;
            }
          }
        `}
      </style>
      </Container>
    </div>
  );
}

export default ResumeNew;
