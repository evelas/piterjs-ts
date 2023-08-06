import { loadingFilesInfoNapi } from 'piterjs-rust-examples';

async function bootstrap() {
  const infoCallback = (
    processed: number,
    total: number,
    fileIteration: number,
  ) => {
    console.log(`Loading file #${fileIteration}. ${processed} / ${total}`);
  };

    try {
      await loadingFilesInfoNapi(infoCallback);
    } catch (err) {
      console.error(err);
    }
}
bootstrap();
