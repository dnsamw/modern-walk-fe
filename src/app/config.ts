export const Config = {
  uiMasterData: {
    siteBrand: "Modern Walk",
    section:{
        flash_sale:"Flsh Sale",
        categories:"Categories",
    }
  },
  colors: {
    green: "#2BD9AF",
    red: "#FF5E84",
  },
};

export enum CATEGORY {
  Male = "male",
  Female = "female",
}

export const colorMap: { [key in CATEGORY]: string } = {
  [CATEGORY.Male]: Config.colors.green,
  [CATEGORY.Female]: Config.colors.red,
};
