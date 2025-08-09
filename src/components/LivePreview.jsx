import React, { useRef, useEffect } from "react";

const LivePreview = ({ code }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const document = iframeRef.current.contentDocument;
    const fullHTML = `
      ${code}
    `;

    document.open();
    document.write(fullHTML);
    document.close();
  }, [code]);

  return (
    <div className="bg-white md:h-full h-screen w-full rounded shadow overflow-hidden">
      <iframe
        ref={iframeRef}
        title="Preview"
        className="w-full h-full border-none"
        style={{ minHeight: 0 }}
      />
    </div>
  );
};

export default LivePreview;
