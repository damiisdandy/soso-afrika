import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from "react";

const ExternalLink: FC<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ children, ...rest }) => {
  return (
    <a rel="noopener noreferrer" target="_blank" {...rest}>
      {children}
    </a>
  );
};

export default ExternalLink;
