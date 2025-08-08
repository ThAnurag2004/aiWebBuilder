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
    <div className="bg-white h-full w-full rounded shadow overflow-hidden">
      <h3 className="text-lg font-semibold p-4 border-b">Live Preview</h3>
      <iframe ref={iframeRef} title="Preview" className="w-full h-full border-none" />
    </div>
  );
};

export default LivePreview;
