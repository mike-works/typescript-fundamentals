interface User {
  email: string;
  password: string;
}
 
interface ConfirmedUser extends User {
  isActive: boolean;
}

interface AdminUser extends ConfirmedUser {
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
  register(email: string, password: string): User {
    if(!email) throw 'Must provide an email';
    if(!password) throw 'Must provide a password';
    let user = { email, password };
    this.users.push(user);
    return user;
  }

  /**
   * Activate a new user account
   * @param approver The admin who's approving this new user
   * @param userToApprove Newly-registered user, who is to be activated
   * @return the updated user object, now activated
   */
  activateNewUser(approver: AdminUser, userToApprove: User): ConfirmedUser {
    if (!approver.adminSince) throw "Approver is not an admin!";
    let toApprove = userToApprove as ConfirmedUser;
    toApprove.isActive = true;
    return toApprove;
  }

  /**
   * Promote a normal user to admin
   * @param existingAdmin admin who is promoting another user
   * @param user an active user who you're making an admin
   * @return the updated user object, now can also be regarded as an admin
   */
  promoteToAdmin(existingAdmin: AdminUser, user: ConfirmedUser): AdminUser {
    if (!existingAdmin.adminSince) throw "Not an admin!";
    if (user.isActive !== true) throw "User must be active in order to be promoted to admin!";
    let newAdmin = user as AdminUser;
    newAdmin.adminSince = new Date();
    return newAdmin;
  }
}
