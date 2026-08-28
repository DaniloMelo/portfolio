import ContactForm from "../ContactForm";
import Container from "../Container";
import { LuMail, LuPhone } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";

interface ContactProps {
  email: string;
  phone: string;
  linkedInProfileUrl: string;
}

export default function Contact({
  email,
  phone,
  linkedInProfileUrl,
}: ContactProps) {
  return (
    <section className="mb-10" id="contact">
      <Container>
        <p className="text-center text-2xl mb-10">Vamos conversar?</p>

        <div className="flex flex-col lg:flex-row lg:justify-between">
          <ContactForm />

          <div className="w-full flex flex-col items-center lg:w-[45%] my-30 lg:my-0 ">
            <p className="self-center text-sm mb-17">
              ou use os meus contatos.
            </p>

            <div>
              <p
                className="flex justify-start items-center gap-10 text-lg mb-10"
                aria-label="meu email"
                title="meu email"
              >
                <LuMail size={30} /> <span>{email}</span>
              </p>

              <p
                className="flex justify-start items-center gap-10 text-lg mb-10"
                aria-label="meu telefone"
                title="meu telefone"
              >
                <LuPhone size={30} /> <span>{phone}</span>
              </p>

              <p
                className="flex justify-start items-center gap-10 text-lg"
                aria-label="meu linkedin"
                title="meu linkedin"
              >
                <FaLinkedin size={30} />{" "}
                <a
                  href="https://www.linkedin.com/in/danilo-marques-de-melo"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  {linkedInProfileUrl}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
