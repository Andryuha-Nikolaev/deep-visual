export type ServicesItemType = {
  id: number;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export type ServicesDataType = {
  title: string;
  data: ServicesItemType[];
};
