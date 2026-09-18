import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "माँ बगलामुखी मंदिर नलखेड़ा धाम | पंडित शुभम शर्मा",
    short_name: "माँ बगलामुखी नलखेड़ा",
    description:
      "विश्वप्रसिद्ध सिद्धपीठ माँ बगलामुखी मंदिर नलखेड़ा—पूज्य पुजारी पंडित शुभम शर्मा जी के सान्निध्य में 100% शास्त्रोक्त महाहवन एवं वैदिक अनुष्ठान।",
    start_url: "/",
    display: "standalone",
    background_color: "#fff8e7",
    theme_color: "#720e18",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
