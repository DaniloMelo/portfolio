export interface Contatct {
  email: string;
  phone: string;
  linkedInProfileUrl: string;
}

export interface Me {
  name: string;
  avatarUrl: string;
  jobTitle: string;
  introduction: string;
  about: string;
  contact: Contatct;
}
