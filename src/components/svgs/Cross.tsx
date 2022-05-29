import { SVGProps } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Cross = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={23}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M2.603.522a.743.743 0 0 1 1.05.007l17.26 17.488a2.972 2.972 0 0 1-.028 4.203.743.743 0 0 1-1.05-.007L2.574 4.724A2.972 2.972 0 0 1 2.604.522Z"
      fill="#C4C4C4"
    />
    <path
      d="M.522 20.509a.743.743 0 0 1 .007-1.05l17.488-17.26a2.972 2.972 0 0 1 4.203.028.743.743 0 0 1-.007 1.051L4.724 20.537a2.972 2.972 0 0 1-4.202-.028Z"
      fill="#C4C4C4"
    />
  </svg>
);

export default Cross;
