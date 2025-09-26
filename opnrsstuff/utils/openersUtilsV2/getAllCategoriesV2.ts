import { RestructuredDataV2, RestructuredCategoryV2, CategoryInfo } from "app/@types/appTypes"

export function getAllCategoriesV2(restructuredDataV2: RestructuredDataV2): CategoryInfo[] {
  return Object.values(restructuredDataV2).map((category: RestructuredCategoryV2) => ({
    categoryName: category.categoryName,
    categoryText: category.categoryText,
    categoryId: category.id,
  }))
}

export default getAllCategoriesV2
