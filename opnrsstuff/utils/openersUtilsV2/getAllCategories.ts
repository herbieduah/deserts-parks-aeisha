import { RestructuredData, RestructuredCategory, CategoryInfo } from "app/@types/appTypes"

export function getAllCategories(restructuredData: RestructuredData): CategoryInfo[] {
  return Object.values(restructuredData).map((category: RestructuredCategory) => ({
    categoryName: category.categoryName,
    categoryText: category.categoryText,
    categoryId: category.id,
  }))
}
