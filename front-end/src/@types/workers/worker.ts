export interface WorkersTypes {
  status: "success";
  result: number;
  data: {
    _id: string;
    name: string;
    title: string;
    description: string;
    lang: "geo | eng";
    worker_id: {
      avatar?: {
        public_id: string;
        url: string;
      };
      _id: string;
    };
  }[];
}

export interface WorkerTypes {
  status: "success";
  data: {
    _id: string;
    name: string;
    title: string;
    description: string;
    lang: "geo | eng";
    worker_id: {
      avatar?: {
        public_id: string;
        url: string;
      };
      _id: string;
    };
  };
}
