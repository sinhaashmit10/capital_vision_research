
import { BackgroundVideo } from "../components/BackgrounVideo";
import ContactUs from "../components/ContactUs";

const ContactPage = () => {
  return (
    <section
      id="contact-page"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-background"
    >
        <BackgroundVideo/>
      {/* Service Options */}
      <div className="w-full max-w-5xl z-5">
        <ContactUs/>
      </div>
    </section>
  );
};

export default ContactPage;
