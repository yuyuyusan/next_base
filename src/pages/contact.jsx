import ContactPage from 'src/components/page/Contact';
import Footer from 'src/components/layout/Footer';
import Header from 'src/components/layout/Header';

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactPage page="contact" />
      <Footer />
    </div>
  );
};
export default Contact;
