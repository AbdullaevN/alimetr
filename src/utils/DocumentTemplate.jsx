import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Регистрируем шрифт с поддержкой кириллицы
Font.register({
  family: 'Helvetica',
  fonts: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
      fontWeight: 'bold',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 12,
    lineHeight: 1.5
  },
  section: {
    marginBottom: 15,
    textAlign: 'justify'
  }
});

export const MyDocument = ({ content }) => {
  // Преобразуем HTML в чистый текст с сохранением переносов строк
  const textContent = content
    .replace(/<[^>]*>/g, '') // Удаляем HTML теги
    .replace(/&nbsp;/g, ' ') // Заменяем неразрывные пробелы
    .replace(/\s+/g, ' ') // Удаляем лишние пробелы
    .trim();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{textContent}</Text>
        </View>
      </Page>
    </Document>
  );
};