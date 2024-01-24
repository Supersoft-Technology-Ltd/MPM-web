import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  weight: ["400", "200", "500", "600", "300"],
  subsets: ["latin"],
  variable: "--font-poppin",
});
export const AmericanTypewriter = localFont({
  src: [
    {
      path: "./American Typewriter Regular.ttf",
      weight: "200",
      style: "black",
    },
    {
      path: "./American Typewriter Regular.ttf",
      weight: "300",
      style: "black",
    },
    {
      path: "./American Typewriter Bold.ttf",
      weight: "500",
      style: "black",
    },
  ],
});

export const Lora = localFont({
  src: [
    {
      path: "./Lora-Regular.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "./Lora-Bold.ttf",
      weight: "600",
      style: "bold",
    },
    {
      path: "./Lora-Bold.ttf",
      weight: "500",
      style: "semi-bold",
    },
  ],
});

export const SpfRounded = localFont({
  src: [
    {
      path: "./Spf-rounded-Medium.ttf",
      weight: "200",
      style: "black",
    },
  ],
});

export const Raleway = localFont({
  src: [
    {
      path: "./Raleway-Regular.ttf",
      weight: "300",
      style: "black",
    },
    {
      path: "./Raleway-Light.ttf",
      weight: "200",
      style: "light",
    },
    {
      path: "./Raleway-SemiBold.ttf",
      weight: "200",
      style: "light",
    },
  ],
});
export const Inter = localFont({
  src: [
    {
      path: "./Inter-Medium.ttf",
      weight: "400",
      style: "black",
    },
    {
        path: "./Inter-Regular.ttf",
        weight: "200",
        style: "extralight",
      },
  ],
});
