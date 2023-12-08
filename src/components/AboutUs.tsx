import { BookText } from "lucide-react";
import Container from "./Container/Container";

const AboutUs = () => {
  return (
    <div className="mt-20">
      <Container>
        <h3 className="flex items-center gap-2 mb-5 font-medium text-2xl">
          <BookText />
          About Us
        </h3>
        <div className="border-2 rounded-xl p-5 shadow-2xl">
          <div className="flex flex-col gap-3 lg:flex-row w-full">
            <img
              className="aspect-video object-cover lg:w-96 lg:h-96 border rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="aboutus img"
            />

            <div className="border rounded-lg shadow-lg w-full p-3">
              <p>
                Welcome to our shoe store! We are a passionate team dedicated to
                providing our customers with the highest quality footwear. Our
                journey began with a simple mission: to bring comfort, style,
                and affordability to shoe lovers around the world. We believe
                that the right pair of shoes can uplift your day, complement
                your outfit, and boost your confidence. We offer a wide range of
                shoes, from casual sneakers to formal wear, ensuring that
                there's a perfect pair for everyone. Our commitment to customer
                satisfaction is at the heart of everything we do. We invite you
                to explore our collection and experience the joy of finding your
                perfect pair. Thank you for choosing us as your trusted shoe
                provider. We look forward to walking this journey with you.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
