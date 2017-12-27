export class Profile {
    public sex: number = 0;
    public firstname: string = '';
    public lastname: string = '';
    public width: number = 0;
    public height: number = 0;
    public email: string = '';
    public image: string = 'user_profile_female.jpg';
    public birthday: string;
    public role: string;

    constructor(private sex_arg: number,
        private firstname_arg: string,
        private lastname_arg: string,
        private width_arg: number,
        private height_arg: number,
        private email_arg: string,
        private image_arg: string,
        private birthday_arg: string,
        private role_arg: string) {
        this.email = email_arg;
        this.firstname = firstname_arg;
        this.lastname = lastname_arg;
        this.width = width_arg;
        this.height = height_arg;
        this.sex = sex_arg;
        this.image = image_arg;
        this.birthday = birthday_arg;
        this.role = role_arg;
    }
}