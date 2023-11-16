export interface BannerType {
    _id: string;
    _createdAt: string;
    title: string;
    description: string;
  }
  
  export interface personalAiTrainerType {
    transparentImage: string;
    transparentMainImage: string;
    name: string;
    intro: string;
    description: string;
    objectContain: boolean;
    _id: string;
  }
  
  export interface FitZoneType {
    _id: string;
    _createdAt: string;
    title: string;
    description1: string;
    description2: string;
    mainDescription: string;
    personalAiTrainers:[personalAiTrainerType]
  }
  