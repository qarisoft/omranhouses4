"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Image,
  Kbd,
  Link,
  Input,
  link as linkStyles,
} from "@heroui/react";
// import { Kbd } from "@heroui/kbd";
// import { Link } from "@heroui/link";
// import { Input } from "@heroui/input";
// import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React from "react";
// import Image from "next/image";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, SearchIcon } from "@/components/icons";
type SerchInputProps = { searchInput: React.JSX.Element };

export const Navbar = () => {
  // const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const switchMenuState = () => {
  // setIsMenuOpen((a) => !a);
  // };
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar
      isBordered
      className="bg-[#ffffff4a]"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      height={90}
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1 bg-slate-00 h-[90px] bg-slate-50    00 relative p-1"
            href="/"
          >
            {/* <div className="absolute bottom-1 left-0 w-full h-5 bg-black opacity-50 shadow-lg"></div> */}
            <Image
              alt="'"
              className=" top-0   left-0"
              height={80}
              src={"/logo-small-1.png"}
              width={80}
            />
            <Image
              alt="'"
              className="bottom-0 mt-7    left-0"
              src={"/logo-text.png"}
              width={120}
            />
            {/* <Logo /> */}
            {/* <p className="font-bold text-inherit">ACME</p> */}
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavItemsContent />

      <NavbarContent />
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavBarMenu searchInput={searchInput} setIsMenuOpen={setIsMenuOpen} />
    </HeroUINavbar>
  );
};
function NavBarMenu({
  searchInput,
  setIsMenuOpen,
}: SerchInputProps & {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname();

  return (
    <NavbarMenu>
      {searchInput}
      <div className="mx-4 mt-2 flex flex-col gap-2">
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            isActive={pathname == item.href}
          >
            <Link
              color={item.href == pathname ? "primary" : "foreground"}
              href={item.href}
              size="lg"
              onClick={() => setIsMenuOpen((a) => !a)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </div>
    </NavbarMenu>
  );
}

function NavItemsContent() {
  const pathname = usePathname();

  return (
    <NavbarContent>
      <ul className="hidden lg:flex gap-4 justify-start ml-2">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href} isActive={pathname == item.href}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
      </ul>
    </NavbarContent>
  );
}

// function SocialIcons({ searchInput }: SerchInputProps) {
//   return (
//     <NavbarContent
//       className="hidden sm:flex basis-1/5 sm:basis-full"
//       justify="end"
//     >
//       <NavbarItem className="hidden sm:flex gap-2">
//         <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
//           <TwitterIcon className="text-default-500" />
//         </Link>
//         <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
//           <DiscordIcon className="text-default-500" />
//         </Link>
//         <Link isExternal aria-label="Github" href={siteConfig.links.github}>
//           <GithubIcon className="text-default-500" />
//         </Link>
//         <ThemeSwitch />
//       </NavbarItem>
//       <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
//       <NavbarItem className="hidden md:flex">
//         <Button
//           isExternal
//           as={Link}
//           className="text-sm font-normal text-default-600 bg-default-100"
//           href={siteConfig.links.sponsor}
//           startContent={<HeartFilledIcon className="text-danger" />}
//           variant="flat"
//         >
//           Sponsor
//         </Button>
//       </NavbarItem>
//     </NavbarContent>
//   );
// }
