/** client principal */
export type ClientPrincipal = {
  userId: string;
  userRoles: string[];
  identityProvider: string;
  userDetails: string;
};
