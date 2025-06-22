import { JSX } from "react";

export type SocialArrayItem = {
  name: string;
  url: string;
  Icon: () => JSX.Element;
};
