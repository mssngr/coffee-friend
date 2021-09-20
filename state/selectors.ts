import { get } from 'lodash'
import Conversions from '../constants/Conversions'

export const getUserId = (state: any) => get(state, 'user.id')
export const getFavoriteCafeIds = (state: any) =>
  get(state, 'user.favoriteCafeIds', [])
export const getFavoriteRecipes = (state: any) =>
  get(state, 'user.favoriteRecipes', [])
export const getSizes = (state: any) => get(state, 'settings.sizes')
export const getMethods = (state: any) => get(state, 'settings.methods')
export const getCurrentServings = (state: any) => get(state, 'current.servings', 1)

export const getCurrentSize = (state: any) => {
  const sizes = getSizes(state)
  const currentSize = get(state, 'current.sizeId', 'sm')
  return sizes[currentSize]
}
export const getCurrentMethod = (state: any) => {
  const methods = getMethods(state)
  const currentMethod = get(state, 'current.methodId', 'pourOver')
  return methods[currentMethod]
}

export const getCurrentRatio = (state: any) => getCurrentMethod(state).ratio

export const getBeans = (state: any) => {
  const servings = getCurrentServings(state)
  const ratio = getCurrentRatio(state)
  const size = getCurrentSize(state)
  const ounces = get(size, 'ounces', 0)
  return Math.round(servings * ounces * Conversions.gramsToOunces / ratio)
}

export const getBloom = (state: any) => {
  const servings = getCurrentServings(state)
  const ratio = getCurrentRatio(state)
  const size = getCurrentSize(state)
  const ounces = get(size, 'ounces', 0)
  return Math.round(servings * ounces * Conversions.gramsToOunces / ratio * 2)
}

export const getWater = (state: any) => {
  const servings = getCurrentServings(state)
  const size = getCurrentSize(state)
  const ounces = get(size, 'ounces', 0)
  return Math.round(servings * ounces * Conversions.gramsToOunces)
}

export default {
  getUserId,
  getFavoriteCafeIds,
  getFavoriteRecipes,
  getSizes,
  getMethods,
  getCurrentServings,
  getCurrentSize,
  getCurrentMethod,
  getCurrentRatio,
  getBeans,
  getBloom,
  getWater,
}
