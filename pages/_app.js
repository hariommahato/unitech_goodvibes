import ChatWidget from "@/frontend/components/ChatWidget";
import Footer from "@/frontend/components/Footer";
import Header from "@/frontend/components/Header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Providers } from "@/frontend/services/provider";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Providers>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ChatWidget />
      </Providers>
    </>
  );
}
