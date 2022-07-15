import "./styles.css";
import {
  Paragraph,
  Document,
  Packer,
  HeadingLevel,
  AlignmentType,
  TextRun
} from "docx";
import { saveAs } from "file-saver";
import split from "./Split";
import jobFormat from "./JobFormat";
import styles from "./style";
//generates doc and holds basic html headers words and stuff

//export default function GenDoc(values) {
export default function generate(values) {
  const skills = split(values["skills"]);
  const overview = split(values["overview"]);
  const experience = jobFormat(
    values["experience"],
    values["company"],
    values["date"],
    values["duties"]
  );
  const doc = new Document({
    styles: styles.getStyles,
    sections: [
      {
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: values["name"],
                font: "Bookman Old Style",
                size: 40,
                bold: true,
                underline: true
              }),
              new TextRun({
                text: " ________________________________________",
                size: 40,
                bold: true
              }),
              new TextRun({
                break: 1,
                text: values["overviewTitle"],
                font: "Bookman Old Style",
                size: 26
              })
            ]
          }),
          overview,
          skills,
          experience,
          new Paragraph({
            text: skills
            // bullet: {
            //   level: 0
            // }
          })
        ]
      }
    ]
  });

  Packer.toBlob(doc).then((blob) => {
    console.log(blob);
    saveAs(blob, "example.docx");
    console.log("Document created successfully");
  });
}
// console.log(generate);
//return {generate}
//return <button onClick={generate}> Generate doc </button>;
//}
