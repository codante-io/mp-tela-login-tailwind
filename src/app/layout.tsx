import "./globals.css";
import { DM_Sans } from "next/font/google";

const dm = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Tela de login",
  description: "Uma tela de login muito linda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${dm.className} flex justify-center items-center h-screen w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
