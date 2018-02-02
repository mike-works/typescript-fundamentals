export interface IUser {
  email: string;
  password: string;
  isActive: boolean;
}

export interface IActiveUser extends IUser {
  isActive: true
}

export interface IAdmin extends IActiveUser {
  adminSince: Date;
}

export class AccountManager {
  users = new Array();

  /**
   * Create a new user account
   * @param email email address
   * @param password the user's password
   * @return the new user account. An admin must activate it using activateNewUser
   * @see this.activateNewUser
   */
  register(email: string, password: string): IUser {
    if(!email) throw 'Must provide an email';
    if(!password) throw 'Must provide a password';
    let user = { email, password, isActive: false };
    this.users.push(user);
    return user;
  }

  /**
   * Activate a new user account
   * @param approver The admin who's approving this new user
   * @param userToApprove Newly-registered user, who is to be activated
   * @return the updated user object, now activated
   */
  activateNewUser(approver: IAdmin, userToApprove: IUser): IActiveUser {
    if (!approver.adminSince) throw "Approver is not an admin!";
    return Object.assign(userToApprove, { isActive: (true as true) });
  }

  /**
   * Promote a normal user to admin
   * @param existingAdmin admin who is promoting another user
   * @param user an active user who you're making an admin
   * @return the updated user object, now can also be regarded as an admin
   */
  promoteToAdmin(existingAdmin: IAdmin, user: IActiveUser) {
    if (!existingAdmin.adminSince) throw "Not an admin!";
    // if (user.isActive !== true) throw "User must be active in order to be promoted to admin!";
    return Object.assign(user, { adminSince: new Date() });
  }
}
