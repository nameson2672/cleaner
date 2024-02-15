export type LandingPagePropsType = {
  id: string;
  header: string;
  body: string;
  imageUrl:string;
};
export type CheckListData = CheckListPropsInfo[]

export interface CheckListPropsInfo {
  imageUrl: string
  header: string
  points: string[]
  crossForSection: CrossForSection[]
}

export interface CrossForSection {
  from: number
  tag: number
}