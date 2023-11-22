export interface ServerResponse {
    status: 'error' | 'success';
    statusCode: number;
    message: string;
    data?: any;
    type?: string;
  }
  