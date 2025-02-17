import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";

export const generateDocument = (form, formData) => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [new TextRun({ text: form.title, bold: true, size: 28 })],
          }),
          ...form.fields.map((field) =>
            new Paragraph(`${field.label}: ${formData[field.name] || "Не указано"}`)
          ),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${form.id}.docx`);
  });
};
