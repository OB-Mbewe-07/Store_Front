import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

interface SearchIconProps {
  size?: number;
  strokeWidth?: number;
  width?: number;
  height?: number;
}

export const SearchIcon = ({ size = 24, strokeWidth = 1.5, width, height }: SearchIconProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default function DisplayNav() {
  return (
    <div className="nav-top">
        <Navbar isBordered className="bg-[#3D4849] w-full max-w-full px-0 border border-white rounded-lg mt-[4%]">
        <NavbarContent justify="start">
            <NavbarBrand className="mr-4">
            <AcmeLogo />
            <p className="hidden sm:block font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem isActive>
                <Link aria-current="page" color="secondary" href="#" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
                Cart
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color="foreground" href="#" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
                Summary
                </Link>
            </NavbarItem>
            </NavbarContent>
        </NavbarContent>
        </Navbar>
    </div>
  );
}