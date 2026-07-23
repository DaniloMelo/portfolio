import { ReactNode } from "react";

interface AnchorLinkProps {
  children: ReactNode;
  className: string;
  sectionId: string;
}

export default function AnchorLink({
  children,
  sectionId,
  className,
}: AnchorLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const section = document.getElementById(sectionId);

    if (!section) return;

    // history.replaceState(null, "", `#${sectionId}`);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <a href={sectionId} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
