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

interface App {
  name: string;
  description: string;
  image: any;
}

interface Team {
  name: string;
  description: string;
  image: any;
  role: string;
  age: number;
  imageModified: any;
}

interface GlobalEntity {
  HomeDescription: string;
  ProyectTitle: string;
  ProyectDescription: string;
  ContactTitle: string;
  ContactDescription: string;
}

interface Seo {
  Title: string;
  Description: string;
  URL: string;
}
