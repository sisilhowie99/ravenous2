const apiKey = 'YxKnvcTEPlavA6-f1ojzVLpderQFpYdO695yAMDYrmd4-N97yT3cVnEgX03n0bIYW-M2AoDr7IizhJPzt6T4Dhnde8kyzt0jGcgdk4UTfYqKM3i-UWdYKc5V9UiQXnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                    }
                })
            }
        })
    }
}

export default Yelp;
