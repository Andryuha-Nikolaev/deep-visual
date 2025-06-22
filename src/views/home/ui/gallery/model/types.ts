export type GalleryItemType = {
  id: number;
  image: string;
  alt: string;
};

export type GalleryDataType = {
  title: string;
  data: GalleryItemType[];
};
