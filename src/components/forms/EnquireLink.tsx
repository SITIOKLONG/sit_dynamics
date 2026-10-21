"use client";

import { Button, type ButtonProps } from "@/components/ui/Button";

interface EnquireLinkProps extends Omit<ButtonProps, "href" | "onClick" | "type"> {
  projectType: string;
}

export function EnquireLink({
  projectType,
  children,
  ...props
}: EnquireLinkProps) {
  const handleClick = () => {
    window.dispatchEvent(
      new CustomEvent<string>("sit:enquiry-type", { detail: projectType }),
    );
  };

  return (
    <Button href="#contact" onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}
