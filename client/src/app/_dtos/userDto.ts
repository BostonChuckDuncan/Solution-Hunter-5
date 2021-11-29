export class UserDto {
    public Username!: string;  
    public Password!: string;
    public Token: any;
    public KnownAs!: string;

    constructor(user: string, password: string, token: string, knownas: string)
    {
        this.Username = user;
        this.Password = password; 
        this.Token = token;
        this.KnownAs = knownas;
    }
}
