import  SanityClient  from './sanity';
let sanityQuery = ( query, params) => SanityClient.fetch( query, params);

export const getFeaturedRestaurants = ()=>{
    return sanityQuery ('
    ')
}

export const getCategories = ()=>{
    return sanityQuery ('
    ')
}

export const getFeaturedRestaurantsById = Id=>{
    return sanityQuery ('
    ')
}