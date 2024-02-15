import { Navbar } from "~/components/Navbar/Navbar";
import { FooterLinks } from "~/components/Footer/Footer";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Navbar />
      <main className="">{children}</main>
      <FooterLinks />
    </div>
  );
}
