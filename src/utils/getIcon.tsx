import icons from "./icon.svg";

const getIcon: (icon: string) => string = (icon: string) =>
    `${icons}#icon-${icon}`;

export default getIcon;
