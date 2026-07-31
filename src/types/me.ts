export interface Contatcts {
  email: string;
  phone: string;
  linkedInProfileUrl: string;
}

export interface Me {
  name: string;
  jobTitle: string;
  introduction: string;
  about: string;
  contacts: Contatcts;
}
