import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (modalContent, useReactPDF = false) => {
  const input = document.createElement("div");
  input.innerHTML = modalContent;
  input.style.margin = "20px 40px";
  input.style.fontSize = "14px";  
  input.style.lineHeight = "1.6";
  document.body.appendChild(input);

  try {
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    if (useReactPDF) {
      // Динамический импорт react-pdf с JSX
      const { pdf, Document, Page, Image } = await import('@react-pdf/renderer');
      
      // Создаем JSX для PDF
      const pdfDoc = (
        <Document>
          <Page size="A4">
            <Image src={imgData} style={{ width: '100%' }} />
          </Page>
        </Document>
      );

      const blob = await pdf(pdfDoc).toBlob();
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'document.pdf';
      link.click();
      URL.revokeObjectURL(url);
    } else {
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("document.pdf");
    }
  } catch (error) {
    console.error('Ошибка генерации PDF:', error);
    throw new Error('Не удалось создать PDF документ');
  } finally {
    document.body.removeChild(input);
  }
};