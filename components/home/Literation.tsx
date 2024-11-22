import React from "react";

const WhyWeNeedLiteracy = () => {
  const reasons = [
    {
      id: 1,
      title: "Meningkatkan Pemahaman Informasi",
      description:
        "Literasi memungkinkan seseorang memahami informasi secara kritis, terutama di era digital yang penuh dengan hoaks.",
      icon: "📰",
    },
    {
      id: 2,
      title: "Menguasai Teknologi",
      description:
        "Literasi digital membantu masyarakat menguasai teknologi untuk keperluan sehari-hari, seperti bekerja, belajar, dan berkomunikasi.",
      icon: "💻",
    },
    {
      id: 3,
      title: "Membangun Karir yang Cemerlang",
      description:
        "Memiliki literasi yang baik membuka peluang karir lebih luas dengan kemampuan adaptasi di dunia kerja modern.",
      icon: "🚀",
    },
    {
      id: 4,
      title: "Meningkatkan Kesejahteraan Sosial",
      description:
        "Literasi membantu masyarakat memahami hak-hak mereka dan membuat keputusan yang mendukung kesejahteraan.",
      icon: "🌍",
    },
    {
      id: 5,
      title: "Mengurangi Ketimpangan",
      description:
        "Dengan literasi, masyarakat di berbagai lapisan sosial dapat memiliki kesempatan yang lebih setara untuk berkembang.",
      icon: "⚖️",
    },
    {
      id: 6,
      title: "Menginspirasi Generasi Masa Depan",
      description:
        "Literasi menciptakan generasi muda yang kreatif, inovatif, dan siap menghadapi tantangan global.",
      icon: "🌟",
    },
  ];

  return (
    <section id="literasi" className="bg-gradient-to-b from-slate-100 to-slate-300 px-6 py-16">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-xl sm:text-4xl font-extrabold mb-4">
          🔍 Mengapa Literasi Penting?
        </h2>
        <p className="text-md sm:text-xl font-light">
          Literasi lebih dari sekadar kemampuan membaca. Ini adalah kunci untuk
          memahami, berinovasi, dan menciptakan masa depan yang lebih cerah.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4 text-center">{reason.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-center">{reason.title}</h3>
            <p className="text-sm text-gray-600 text-center">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyWeNeedLiteracy;
