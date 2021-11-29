export class User {
  id!: string;
  userName!: string;
  passwordHash!: string;
  passwordSalt!: string;
  canTrial!: boolean;
  trialBegan!: Date;
  trialEnd!: Date;
  ccTypeUser!: boolean;
  nameOnCC!: string;
  ccNumber!: string;
  ccExpires!: string;
  ccAuthcode!: string;
  firstName!: string;
  lastName!: string;
  phone1!: string;
  phone2!: string;
  knownAs!: string;
  emailAddress!: string;
  question!: string;
  answer!: string;
  role!: string[];
}

export class UserStatus {
    userLoggedIn!: boolean;
    systemAdmin!: boolean;
    userId!: number;
    userName!: string;
    }

export class UserShortModel {
  firstName!: string;
  lastName!: string;
  phone1!: string;
  phone2!: string;
  knownAs!: string;
  emailAddress!: string;
  userName!: string;
  password!: string;
  question!: string;
  answer!: string;
  systemAdmin!: boolean;
}
