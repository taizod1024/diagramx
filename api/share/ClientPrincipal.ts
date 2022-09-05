/** client principal type */
export type ClientPrincipal = {
  /** user id */
  userId: string;

  /** user roles */
  userRoles: string[];

  /** identity provider */
  identityProvider: string;

  /** user details */
  userDetails: string;
};
