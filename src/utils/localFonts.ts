import localFont from "next/font/local";

const RedHatDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/redHat/RedHatDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/redHat/RedHatDisplay-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/redHat/RedHatDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/redHat/RedHatDisplay-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/redHat/RedHatDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/redHat/RedHatDisplay-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/redHat/RedHatDisplay-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/redHat/RedHatDisplay-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/redHat/RedHatDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/redHat/RedHatDisplay-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/redHat/RedHatDisplay-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/redHat/RedHatDisplay-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-redHatDisplay",
  display: "swap",
});

const Ubuntu = localFont({
  src: [
    {
      path: "../../public/fonts/ubuntu/Ubuntu-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ubuntu/Ubuntu-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/ubuntu/Ubuntu-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ubuntu/Ubuntu-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/ubuntu/Ubuntu-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ubuntu/Ubuntu-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/ubuntu/Ubuntu-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/ubuntu/Ubuntu-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-ubuntu",
  display: "swap",
});

const localFonts = {
  RedHatDisplay,
  Ubuntu,
};

export default localFonts;
