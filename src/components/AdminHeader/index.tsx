import Link from "next/link";
import Container from "../Container";
import LogoutBtn from "../LogoutBtn";
import Theme from "../Theme";

export default function AdminHeader() {
  return (
    <header className="bg-secondary-background dark:bg-secondary-background">
      <Container className="px-0 sm:px-0 sm:py-0 lg:px-0 lg:py-0">
        <div className="flex justify-between items-center p-2">
          <LogoutBtn />
          <div className="flex justify-between items-center gap-6">
            <Link href="/" className="px-2 hover:border-b">
              Início
            </Link>

            <Theme />
          </div>
        </div>
      </Container>
    </header>
  );
}
