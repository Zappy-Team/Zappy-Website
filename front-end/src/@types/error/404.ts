export interface Error404 {
  status: "fail";
  message: string;
  error: {
    statusCode: number;
    status: "fail";
  };
}
