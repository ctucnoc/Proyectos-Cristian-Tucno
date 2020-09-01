export class UserLogin {
    user_id: string;
    user_password: string;
    multi_company_id: number;
    constructor(user_id: String, user_password: string,multi_company_id:number) {
        this.user_id = user_password;
        this.user_password = user_password;
        this.multi_company_id=multi_company_id;
    }
}
