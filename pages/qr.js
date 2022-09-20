import { useEffect, useState } from 'react';

import { QRCodeSVG } from 'qrcode.react';

const QrPage = (e) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const dataFromStorage = window.localStorage.getItem('data');
    setData(dataFromStorage);
  }, []);

  return (
    <>
      <main>
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
          <p className="text-4xl ">Your Data here</p>
          <QRCodeSVG value={data} height={300} width={300} />
        </div>
      </main>
    </>
  );
};

export default QrPage;
