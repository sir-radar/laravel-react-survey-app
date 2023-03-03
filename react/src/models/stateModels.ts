import { ReactNode } from "react";

export interface contextInterface {
  user: {
    name?: string;
    email?: string;
  };
  setUser: (user: any) => void;
  userToken?: string;
  persistUserToken: (userToken: any) => void;
  surveys: Survey[];
  questionTypes: string[];
  toast: {
    message?: string;
    show: boolean;
  };
  showToast: (message: string) => void;
}

export interface Survey {
  answers?: ReactNode;
  id?: number | string;
  image?: File | null;
  image_url?: string | ArrayBuffer | null;
  title?: string;
  slug?: string;
  status?: boolean;
  description?: string;
  created_at?: string;
  updated_at?: string;
  expire_date?: string;
  questions: Question[];
}

export interface Question {
  id: number | string;
  type: string;
  question: string;
  description: string | null;
  data?: {
    options?: Options[];
  };
}

export interface Options {
  uuid: string;
  text: string;
}
