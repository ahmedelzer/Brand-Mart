export const heroStyles = {
  landing: "landing",
  overlay: "overlay",
  text: "text",
  content: "content",
  title: "pt-12",
  bullets: "bullets pt-12",
  bulletOne: "one",
  bulletTwoActive: "two active",
  bulletThree: "three",
  container:
    "container my-5 flex-1 flex-wrap lg:items-center lg:justify-evenly justify-center flex-row gap-4 flex",
};
export const contentStyles = {
  container: "container my-24 mx-auto md:px-6",
  section: "mb-32",
  title: "mb-16 text-center text-2xl font-bold",
  flexWrap: "flex flex-wrap",
  firstColumn:
    "mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6",
  rippleEffect:
    "ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg",
  image: "w-full",
  hoverOverlay:
    "absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100",
  secondColumn: "w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6",
  articleTitle: "mb-4 text-2xl font-bold",
  articleMeta: "mb-4 flex items-center text-sm font-medium text-accent",
  articleDescription: "mb-6 text-sm text-text",
  articleText: "!text-primary",
};
export const mainContentStyles = {
  container: "", // Add any specific class names or Tailwind classes for the container here if needed
  flexWrap: "mb-16 flex flex-wrap ",
  firstColumn:
    "mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:px-6",
  rippleEffect:
    "ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg",
  image: "w-full",
  hoverOverlay:
    "absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100",
  secondColumn: "w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6 relative",
  articleTitle: "mb-4 text-2xl font-bold",
  articleMeta: "mb-4 flex items-center text-sm font-medium text-accent",
  articleDescription: "mb-6 text-sm text-text",
  articleText: "!text-primary",
  reviewSection: "pt-2",
};
export const reviewStyles = {
  container: "text-sm leading-6",
  figure: "relative flex flex-col-reverse rounded-lg p-6 bg-card",
  blockquote: "mt-6",
  figcaption: "flex items-center space-x-4",
  img: "flex-none w-14 h-14 rounded-full object-cover",
  textBase: "text-base",
};
export const actionsStyles = {
  container: "text-right flex absolute right-0 lg:mt-[20px]",
  item: "mx-2 flex",
  count: "font-bold text-[24px]",
  iconWrapper:
    "p-2 transition-all duration-300 hover:!bg-primary hover:rounded-full",
  icon: "text-current cursor-auto",
  iconLiked: "!text-accent",
  iconHover: "hover:text-accent cursor-pointer",
};
export const playlistStyles = {
  container:
    "mt-5 relative flex justify-between text-text flex-wrap md:flex-nowrap",
  swiperWrapper: "w-full",
  button:
    "duration-300 transition-all rounded-md hover:opacity-70 cursor-pointer bg-transparent overflow-hidden",
  selectedButton: " opacity-50 border-2 border-accent",
  image: "md:rounded-[0px] rounded-sm",
};
export const cardStyles = {
  container:
    "max-w-sm rounded overflow-hidden bg-card card-shadow shadow-lg my-4",
  swiper:
    "productSlider mySwiper mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]",
  image: "w-full",
  video: "shadow-lg",
  contentContainer: "px-6 py-1",
  title: "font-bold text-accent text-xl mb-2",
  description: "text-base",
  tagContainer: "px-6 pt-4 pb-2",
  tag: "inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2",
  tagPhotography: "!bg-body text-text",
  tagTravel: "bg-white text-body",
  tagWinter: "bg-gray-200 text-gray-700",
};
export const postsStyles = {
  container: "container",
  swiper:
    "productSlider mySwiper mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]",
};
export const pageHeadingStyles = {
  container: "mb-4",
  content: "mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12",
  title: "text-base font-semibold uppercase tracking-wide text-accent",
  subTitle: "font-heading mb-4 font-bold tracking-tight text-3xl sm:text-5xl",
  desc: "mx-auto mt-4 max-w-3xl text-xl !text-primary",
};
export const sectionStyles = {
  container: "!bg-transparent",
  heading: "heading",
  description: "mt-3 mb-12 text-lg !text-primary",
  list: "mb-6 md:mb-0",
  listItem: "flex items-center gap-2",
  iconContainer:
    "flex h-10 w-10 items-center justify-center rounded bg-accent text-text",
  icon: "h-6 w-6",
  itemContent: "mx-4 mb-4",
  title: "mb-2 text-lg font-medium leading-6 text-text",
  text: "!text-primary",
};
export const staffStyles = {
  container: "container my-24 mx-auto md:px-6",
  section: "mb-32 text-center",
  heading: "mb-32 text-3xl font-bold",
  accentText: "text-accent",
  grid: "grid gap-6 md:grid-cols-3 lg:gap-12 md:!gap-y-[6rem]",
  cardContainer: "mb-24 md:mb-0",
  card: "block h-full rounded-lg card-shadow bg-card",
  imageWrapper: "flex justify-center",
  imageInner: "flex justify-center -mt-[75px]",
  image: "mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]",
  content: "p-6",
  name: "mb-4 text-lg font-bold text-accent",
  role: "mb-6",
  socialIcons: "mx-auto flex list-inside justify-center",
  icon: "px-2",
  iconSvg: "h-4 w-4 dark:!text-primary-400",
  iconSvgPrimary: "h-4 w-4 !text-primary dark:!text-primary-400",
  iconSvgSm: "h-3.5 w-3.5 !text-primary",
};
export const serviceStyles = {
  container: "w-full container m-auto",
  heading: "heading",
  categoryWrapper: "mb-4 pb-4",
  serviceWrapper: "flex flex-wrap -mx-4",
};
export const brandServiceCategoryStyles = {
  container: "flex flex-col items-center justify-center",
  tabWrapper:
    "sm:w-fit xs:w-[90%] sm:px-4 py-2 rounded-sm flex md:flex-no-wrap xs:flex-wrap md:gap-4 xs:gap-1 justify-center !bg-primary text-body cursor-pointer md:text-lg md:font-semibold xs:text-sm",
  tab: "px-4 border-b-2 rounded-b-md",
  activeTab: "!border-accent",
  inactiveTab: "!border-primary hover:!border-accent",
  description: "mt-5 !text-primary text-xl",
};
export const brandServiceStyles = {
  container: "w-full md:w-1/2 lg:w-1/3 px-4",
  card: "p-10 md:px-7 xl:px-10 rounded-[20px] cursor-pointer !bg-primary shadow-md hover:shadow-accent mb-8 transition duration-300 ease-in-out",
  iconWrapper:
    "w-[70px] h-[70px] flex items-center justify-center !bg-body rounded-2xl mb-2",
  title: "font-semibold text-xl text-dark mb-3",
  description: "text-body-color",
  buttonWrapper: "flex justify-end",
  button: "btn btn-accent mt-4",
};
export const notFoundStyles = {
  section: "flex items-center h-screen p-16",
  container: "container flex flex-col items-center",
  content: "flex flex-col gap-6 max-w-md text-center",
  title: "font-extrabold text-9xl",
  message: "text-2xl md:text-3xl !text-primary",
  button: "px-8 py-4 btn btn-accent",
};
export const comingSoonStyles = {
  container: "min-h-screen bg-body flex flex-col items-center justify-center",
  title: "text-5xl text-text font-bold mb-8 animate-pulse",
  message: "text-text text-lg mb-8",
};
export const requestStyles = {
  form: "mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6",
  divWrapper: "mb-3 w-full",
  label: "block font-medium mb-[2px] text-text",
  input: "px-2 py-2 border text-body w-full outline-none rounded-md",
  textarea: "px-2 py-2 border rounded-[5px] text-body w-full outline-none",
  button: "mb-6 main-button w-full",
};
export const contactUsStyles = {
  container: "container my-12 mx-auto px-2 md:px-4",
  section: "mb-32",
  headingWrapper: "flex justify-center",
  contentWrapper: "flex flex-wrap",
  requestWrapper: "w-full shrink-0 grow-0 basis-auto lg:w-7/12",
  contactInfoWrapper: "flex flex-wrap",
  infoBlock:
    "mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6",
  infoIconWrapper: "flex items-start",
  iconContainer: "shrink-0",
  iconStyle: "inline-block rounded-md bg-teal-400-100 p-4 text-accent",
  infoTextWrapper: "ml-6 grow",
  infoTitle: "mb-2 font-bold",
  infoDetails: "!text-primary",
};
export const listObserverStyle = {
  container: "h-px", // Sets height to 1 pixel
};
