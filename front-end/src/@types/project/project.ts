export interface ProjectsTypes {
  status: "success";
  result: number;
  data: {
    title: string;
    description: string;
    feature: true;
    link: string;
    categories: string;
    image: {
      public_id: string;
      url: string;
    };
    _id: string;
    __v: number;
  }[];
}

export interface ProjectTypes {
  status: "success";
  data: {
    title: string;
    description: string;
    feature: true;
    link: string;
    categories: string;
    image: {
      public_id: string;
      url: string;
    };
    _id: string;
    __v: number;
  };
}
