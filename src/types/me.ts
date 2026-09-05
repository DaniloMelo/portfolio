export interface Me {
  name: string;
  avatarUrl: string;
  jobTitle: string;
  introduction: string;
  about: string;
  email: string;
  phone: string;
  linkedInProfileUrl: string;
  github: string;
}

export interface IUpdateMe extends Me {
  id: string;
}
