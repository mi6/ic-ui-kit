export interface IcPageChangeEventDetail {
  value: number;
  fromItemsPerPage?: boolean;
}

export interface IcItemsPerPageChangeEventDetail {
  value: number;
  isUserAction?: boolean;
}
