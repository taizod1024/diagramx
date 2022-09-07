/** client principal type */
export type ClientPrincipal = {
  /** user id */
  userId: string;

  /** user roles */
  userRoles: string[];

  /** identity provider */
  identityProvider: '' | 'github' | 'twitter' | 'google';

  /** user details */
  userDetails: string;
};
