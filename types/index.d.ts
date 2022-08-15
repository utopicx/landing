interface Response<T> {
  data: Array<T>;
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
