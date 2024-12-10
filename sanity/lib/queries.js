// Query to fetch articles based on pagination (start and limit).
// It orders articles by the published date in descending order, 
// and limits the results based on the provided `start` and `limit`.
export const ARTICLES = (start, limit) => `
  *[_type == "post" && !(_id in path('drafts.**'))] 
  | order(publishedAt desc) 
  [${start}...${start + limit}]
  {
    _id,
    title,
    slug {
      current
    },
    "categories": categories[]->title,
    "authorName": author->name,
    "avatar": author->image.asset->url,
    publishedAt,
    "mainImage": mainImage.asset->url,
    "alt": mainImage.alt
  }
`;

// Filter articles with more than 2 clicks
// The post must not be older than 2 weeks
// Order by clicks in descending order
// Limit to the first 6 articles
export const FEED_LAYOUT = `
  *[_type == "post" && clicks > 2 && dateTime(publishedAt) >= dateTime(now()) - 1209600 && !(_id in path('drafts.**'))] 
  | order(clicks desc)
  [0...5]
  {
    _id,
    title,
    slug {
      current
    },
    "categories": categories[]->title,
    "authorName": author->name,
    "avatar": author->image.asset->url,
    publishedAt,
    "mainImage": mainImage.asset->url,
    "alt": mainImage.alt
  }
`;

// Query to fetch the total count of articles. 
// This query returns the count of all posts of type "post".
export const TOTAL_ARTICLES_COUNT = `
  *[_type == "post" && !(_id in path('drafts.**'))] {
    "length": count(*[_type == "post" && !(_id in path('drafts.**'))]) 
  }
`;

// Query to fetch a single article based on its slug.
// The `$slug` parameter is used to get the exact article by its slug.
// It returns details like the title, categories, author, published date, main image, and the body content.
export const SLUG = `
  *[_type == 'post' && slug.current == $slug && !(_id in path('drafts.**'))][0] {
    _id,
    title,
    "Categories": categories[]->title,
    "Author": author->name,
    publishedAt,
    "avatar": author->image.asset->url,
    "mainImage": mainImage.asset->url,
    "alt": mainImage.alt,
    body
  }
`;

// Query to fetch configuration data. 
// It retrieves the logo, company name, meta title, favicon icon, and meta description from a "Config" document.
export const CONFIG_QUERY = `
  *[_type == "Config"][0] {
    "Logo": LogoImage.asset->url,
    "CompanyName": CompanyTitle,
    "MetaTitle": MetaTitle,
    "Icon": IconImage.asset->url,
    "MetaDescription": MetaDescription
  }
`;

// Query to search for posts that match a search query in either the title or excerpt.
// The `$SEARCH` parameter is used for searching. This returns a list of articles where either the title or excerpt matches the query.
export const SEARCH_QUERY = `
  *[_type == "post" && title match $SEARCH && !(_id in path('drafts.**'))] {
    _id,
    title,
    slug {
      current
    },
    "categories": categories[]->title,
    "authorName": author->name,
    "avatar": author->image.asset->url,
    publishedAt,
    "mainImage": mainImage.asset->url,
    "alt": mainImage.alt,
  }
`;



// Query to fetch all "Newsletter" documents
// Returns: _id, title, description, placeholder, buttonText
export const NEWSLETTER_QUERY = `
  *[_type == "Newsletter" && !(_id in path('drafts.**'))][0] {
    _id,
    title,
    description,
    placeholder,
    buttonText
  }
`;
