import CertificateTemp from "../../img/Certificate.pdf";
import { useState, useEffect } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import { db } from "../../Firebase";
import { useStateValue } from "../../StateProvider";

const Certifacate = () => {
  const [cert, setCert] = useState("");
  const [{ user }] = useStateValue();
  const [studentName, setStudentName] = useState("");

  const getStudentName = db.collection("users").doc(user.uid);
  useEffect(() => {
    return getStudentName.get().then((doc) => {
      setStudentName(doc.data().name);
    });
  }, [user, getStudentName]);

  /*Generate Certificate*/
  const generatePDF = async (name) => {
    const exBytes = await fetch(CertificateTemp).then((res) =>
      res.arrayBuffer()
    );

    const PdfDoc = await PDFDocument.load(exBytes);
    const pages = PdfDoc.getPages();
    const firstPg = pages[0];

    firstPg.drawText(name, {
      x: 279,
      y: 312,
      size: 40,
      color: rgb(0.2, 0.4, 0.7),
    });

    const uri = await PdfDoc.saveAsBase64({ dataUri: true });
    setCert(uri);
  };

  generatePDF(studentName);

  return (
    <div>
      <iframe src={cert} id="certificate" title="cert" frameBorder="0"></iframe>
    </div>
  );
};

export default Certifacate;
