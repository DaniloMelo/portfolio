import Container from "@/components/Container";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main
      className="
      h-screen flex justify-center items-center
      bg-linear-to-br from-primary-background from-0% via-accent/50 via-70% to-accent to-100%
      dark:from-primary-background dark:from-50% dark:via-accent/10 dark:via-70% dark:to-accent/40 dark:to-100%
    "
    >
      <Container>
        <LoginForm />
      </Container>
    </main>
  );
}
