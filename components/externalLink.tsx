import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO: make this type more flexible so that it can take anything a link can
export default function ExternalLink({
  children,
  href,
  title,
}: {
  children;
  href: string;
  title: string;
}) {
  return (
    <a href={href} title={title}>
      {children}
      <FontAwesomeIcon
        icon={faExternalLinkAlt}
        className="relative"
        style={{ left: "5px", top: "-5px", fontSize: "0.8rem" }}
      />
    </a>
  );
}