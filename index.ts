import { createWorker } from 'tesseract.js';

(async () => {
  const worker = await createWorker('eng', 1, {
    logger: (m) => console.log(m),
  });
  const ret = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
  console.log(ret.data.text);
  await worker.terminate();
})();
