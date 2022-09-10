interface ResponseArray<T> {
  data: Array<{
    id: number;
    attributes: T;
  }>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface Response<T> {
  data: {
    id: number;
    attributes: T;
  };
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface Auth {
  jwt: string;
}

interface ImageProps {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  size: number;
  url: string;
  width: number;
}

interface Image {
  attributes: ImageProps & {
    alternativeText: string;
    caption: string;
    createdAt: string;
    formats: { small: ImageProps; medium: ImageProps; thumbnail: ImageProps };
    previewUrl: nul;
    provider: string;
    provider_metadata: null;
    updatedAt: string;
  };
}

interface App {
  name: string;
  description: string;
  URLAndroid: string;
  URLApple: string;
  Image: {
    data: Image;
    id: number;
  };
}

interface Team {
  name: string;
  description: string;
  image: {
    data: Image;
    id: number;
  };
  role: string;
  age: number;
  imageModified: {
    data: Array<Image>;
    id: number;
  };
}

interface GlobalEntity {
  HomeDescription: string;
  ProyectTitle: string;
  ProyectDescription: string;
  ContactDescription: string;
  ContactFormTitle: string;
  ContacFormDescription: string;
}

interface Seo {
  Title: string;
  Description: string;
  URL: string;
}
