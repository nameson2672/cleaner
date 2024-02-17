import { Dispatch, SetStateAction } from "react"

export interface CustomClickChangeCardProp extends SelectedPackageInfo  {
    setSelection : Dispatch<SetStateAction<SelectedPackageInfo[]>>
    selection:SelectedPackageInfo[]
  }

  export interface SelectedPackageInfo {
    imageUrl: string
    name: string
    description: string
    price:number
  }

  