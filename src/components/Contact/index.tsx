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
    <section className="h-150 bg-blue-900" id="contact">
      contact email: {email}
      telefone: {phone}
      linkedin: {linkedInProfileUrl}
    </section>
  );
}
