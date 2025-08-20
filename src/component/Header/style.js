export const headerStyles = {
  container: "w-full container m-auto",
  headerWrapper: "flex !flex-nowrap items-center justify-between py-1",
  logoWrapper: "flex items-center",
  logoImage: "w-[100px] h-[100px]",
  navListWrapper: "hidden lg:flex !flex-row items-center space-x-6",
  navList: "flex !flex-row",
  navItem: "font-bold text-[19px] p-2 duration-300 transition-all",
  navLink: "nav-link hover:text-accent whitespace-nowrap",
  languageWrapper: "hidden lg:flex items-center space-x-4",
  menuIcon: "text-3xl xl:hidden cursor-pointer",
  button: "btn btn-accent bg-accent mx-4",
  mobileMenuIcon: "lg:hidden flex items-center",
  mobileMenuButton: "btn btn-accent mx-4",
  mobileMenu: (open) =>
    `${
      open ? "right-0" : "-right-full"
    } fixed top-0 bottom-0 !z-[500] w-full h-screen transition-all duration-200`,
};
export const categoryNavMobileStyles = {
  container: "w-full h-full bg-card p-8",
  closeButtonWrapper: "flex justify-end mb-8 cursor-pointer",
  closeButtonIcon: "text-3xl",
  linkWrapper: "flex flex-col gap-y-8",
  link: "uppercase font-medium",
};
export const languageSelectorStyles = {
  form: "",
  fieldset: "w-full",
  label: "sr-only",
  relative: "relative",
  select:
    "appearance-none cursor-pointer block w-full bg-none bg-card border border-transparent rounded-md py-2 pl-3 pr-10 text-base text-text focus:outline-none focus:ring-text focus:border-text sm:text-sm",
  option: "cursor-pointer",
  svgContainer:
    "pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center",
  svg: "h-4 w-4 text-text",
};
