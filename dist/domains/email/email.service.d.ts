export declare class EmailService {
    private transporter;
    constructor();
    sendVerificationEmail(emailAddress: string, signupVerifyToken: string): Promise<void>;
}
