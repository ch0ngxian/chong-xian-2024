"use client";

export default function VideoModal({ videoUrl, onClose = null }) {
  return (
    <div className="bg-black bg-opacity-50 h-screen w-screen flex justify-center items-center z-50 fixed top-0 left-0" onClick={onClose}>
      <div className="w-11/12 md:w-3/4 md:h-3/4 aspect-video rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
